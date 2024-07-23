"""
Generates examples in nodes.tsx from a local copy of the openapi spec. Make sure you pull the latest change
in the substrate repo and run `make generate` before running this script.

Run this from docs root. The main substrate repo should be colocated with the docs repo.
Or you can set the SUBSTRATE_HOME environment variable.
"""

import json
import os
from jinja2 import Template

SUBSTRATE_HOME = os.environ.get("SUBSTRATE_HOME", "../substrate")

spec_path = f"{SUBSTRATE_HOME}/site/public/openapi.json"
inout_path = f"{SUBSTRATE_HOME}/site/app/nodes/examples/inout"


openapi = {}
with open(spec_path) as file:
    openapi = json.load(file)

paths = openapi["paths"]
schemas = openapi["components"]["schemas"]
keys = list(paths.keys())
nodes = list(map(lambda x: x.replace("/", ""), keys))
nodes_dict = {}
for key in keys:
    if "RunPython" in key:
        continue
    if "If" in key:
        continue
    if "Box" in key:
        continue
    # get operation data
    node_data = paths[key]
    tags = node_data["post"]["tags"]
    info = {}
    info["description"] = node_data["post"]["description"]
    for tag in tags:
        k, v = tag.split(":")
        info[k] = v
    node = key.replace("/", "")
    # get input properties
    inputs = schemas[f"{node}In"]["properties"]
    input_list = []
    required = schemas[f"{node}In"].get("required", [])
    for key, value in inputs.items():
        prop = {"name": key, "required": key in required, **value}
        # resolve refs
        if prop.get("$ref"):
            prop = {"name": key, **value, **schemas[prop["$ref"].split("/")[-1]]}
        elif prop["type"] == "array" and prop["items"].get("$ref"):
            prop["items"] = schemas[prop["items"]["$ref"].split("/")[-1]]
        input_list.append(prop)
    info["inputs"] = input_list
    # get output properties
    outputs = schemas[f"{node}Out"]["properties"]
    output_list = []
    for key, value in outputs.items():
        prop = {"name": key, **value}

        # resolve refs
        if prop.get("$ref"):
            prop = {"name": key, **value, **schemas[prop["$ref"].split("/")[-1]]}
        elif prop["type"] == "array" and prop["items"].get("$ref"):
            prop["items"] = schemas[prop["items"]["$ref"].split("/")[-1]]
        output_list.append(prop)
    info["outputs"] = output_list
    # set data
    nodes_dict[node] = info


def py_path(node: str):
    return f"{inout_path}/{node}In.py"


def ts_path(node: str):
    return f"{inout_path}/{node}In.ts"


def json_path(node: str):
    return f"{inout_path}/{node}Out.json"


node_to_ts = {}
node_to_py = {}
node_to_json = {}
for node in nodes:
    py_content = ""
    ts_content = ""
    js_content = ""
    with open(py_path(node)) as f:
        py_content = f.read()
    with open(ts_path(node)) as f:
        ts_content = f.read()
    with open(json_path(node)) as f:
        json_content = f.read()
    node_to_ts[node] = ts_content
    node_to_py[node] = py_content
    node_to_json[node] = json_content


nodes_list = []
for key, value in nodes_dict.items():
    node_data = {k: v for k, v in value.items()}
    node_data["name"] = key
    node_data["example"] = node_to_py[key]
    node_data["output"] = node_to_json[key]
    nodes_list.append(node_data)
all_node_names = [n["name"] for n in nodes_list]


with open("codegen/nodes.j2") as template_f:
    interface_template = Template(template_f.read())
data = {
    "nodes": nodes_list,
}
rendered_template = interface_template.render(**data)
output = "./components/nodes.tsx"
with open(output, "w") as file:
    file.write(rendered_template)
