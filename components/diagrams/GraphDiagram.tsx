"use client";
import Dagre from "@dagrejs/dagre";
import React, { useState } from "react";
import ReactFlow, {
  Background,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";
import Image from "next/image";

function LabelHandle({ position }: { position: any }) {
  return (
    <>
      <Handle
        type={position === Position.Top ? "target" : "source"}
        isConnectable={false}
        position={position}
        style={{ background: "transparent", border: "none" }}
      />
    </>
  );
}

function SubstrateNode({ data }: { data: any }) {
  const [selected, setSelected] = useState(false);
  return (
    <div>
      <div className="absolute -top-7 grid grid-cols-1 text-[8px] leading-3 text-wrap">
        {/* {data.prefix &&
          (data.prefix.includes("mythical") ? ( */}
        <div className="bg-white px-1 text-black opacity-80 font-mono rounded leading-[0.5rem]">
          {data.prefix}
        </div>
        {/* ) : (
            <div className="bg-white text-spurple p-1 font-mono rounded leading-[0.5rem]">
              {data.prefix}
            </div>
          ))} */}
      </div>
      <LabelHandle position={Position.Top} />
      <div
        className={`opacity-60 absolute -top-8 -z-50 left-4 grid grid-cols-1 text-[8px] leading-3 text-wrap`}
      >
        {data.image && (
          <Image src={data.image} width={160} height={160} alt="output" />
        )}
      </div>
      <div className="px-2 -py-2 -my-2 rounded flex text-2xs text-black font-mono font-normal">
        {data.label}
      </div>
      <LabelHandle position={Position.Bottom} />
      <div className="absolute top-5 grid grid-cols-1 text-[8px] leading-3 text-wrap">
        {data.texts &&
          data.texts.map((output: any) => {
            return (
              <div
                key={output.length}
                className={`bg-white text-black font-mono w-[240px] rounded p-1 mb-1 leading-[0.5rem]`}
              >
                {output}
              </div>
            );
          })}
      </div>
    </div>
  );
}

const dagreGraph = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
dagreGraph.setDefaultEdgeLabel(() => ({}));
const charWidth = 13; // approx pixels per label character
const nodeHeight = 88;

const getLayoutedElements = (nodes: any, edges: any) => {
  function nodeWidth(node: any) {
    return charWidth * 2 + node.data.label.length * charWidth;
  }

  dagreGraph.setGraph({ rankdir: "TB" });

  nodes.forEach((node: any) =>
    dagreGraph.setNode(node.id, {
      width: nodeWidth(node),
      height: nodeHeight,
    }),
  );
  edges.forEach((edge: any) => dagreGraph.setEdge(edge.source, edge.target));

  Dagre.layout(dagreGraph);

  nodes.forEach((node: any) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = "top";
    node.sourcePosition = "bottom";

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth(node) / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return {
    nodes,
    edges,
  };
};

export default function GraphDiagram({ json }: { json: any }) {
  const inputNodes = json.nodes;
  const inputEdges = json.edges;
  const nodes = inputNodes.map((node: any) => ({
    id: node.id,
    type: "substrate",
    data: {
      label: node.name,
      texts: node.texts,
      prefix: node.prefix,
      image: node.image,
    },
    position: { x: 0, y: 0 },
  }));
  const edges = inputEdges.map((edge: any) => ({
    id: `${edge[0]}-${edge[1]}`,
    source: edge[0],
    target: edge[1],
    animated: false,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 12,
      height: 12,
      // color: "#6E42BD",
      color: "black",
    },
    style: {
      strokeWidth: 3,
      // stroke: "#6E42BD",
      stroke: "black",
      // animation: "dashdraw 0.8s linear infinite",
      // strokeDasharray: 1,
    },
  }));
  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    nodes,
    edges,
  );

  const nodeTypes = { substrate: SubstrateNode };

  const LayoutFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

    return (
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        // fitViewOptions={{ padding: 0.1 }}
        proOptions={{ hideAttribution: true }}
        zoomOnScroll={false}
        preventScrolling={false}
        elementsSelectable={false}
        zoomOnDoubleClick={false}
        panOnDrag={false}
        nodesDraggable={false}
        fitView
      >
        {/* <Background /> */}
      </ReactFlow>
    );
  };

  return (
    <>
      <ReactFlowProvider>
        <LayoutFlow />
      </ReactFlowProvider>
    </>
  );
}
