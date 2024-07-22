"use client";
import Dagre from "@dagrejs/dagre";
import React, { useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";

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
    <div
      className={`shadow-lg rounded border border-[#f6f6f6] bg-white p-2`}
      onMouseDownCapture={() => {
        setSelected(!selected);
      }}
    >
      <code
        className={`text-black text-xs visible absolute -top-4 left-0 font-normal bg-white`}
      >
        {data.input}
      </code>
      <LabelHandle position={Position.Top} />
      <div className="-py-1 -my-2 flex px-2 font-mono text-sm font-normal text-black">
        {data.label}
      </div>
      <LabelHandle position={Position.Bottom} />
      <code
        className={`text-black text-xs absolute -bottom-4 right-0 font-normal bg-white`}
      >
        {data.output}
      </code>
    </div>
  );
}

const dagreGraph = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
dagreGraph.setDefaultEdgeLabel(() => ({}));
const charWidth = 13; // approx pixels per label character
const nodeHeight = 40;

const getLayoutedElements = (nodes: any, edges: any) => {
  function nodeWidth(node: any) {
    return charWidth * 2 + node.data.label.length * charWidth;
  }

  dagreGraph.setGraph({ rankdir: "LR" });

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
    data: { label: node.name, input: node.input, output: node.output },
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
      color: "gray",
    },
    style: {
      strokeWidth: 1.5,
      stroke: "gray",
      // animation: "dashdraw 0.8s linear infinite",
      strokeDasharray: 1,
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
        fitViewOptions={{ padding: 0.2 }}
        proOptions={{ hideAttribution: true }}
        zoomOnScroll={false}
        preventScrolling={false}
        elementsSelectable={false}
        zoomOnDoubleClick={false}
        panOnDrag={false}
        className="cursor-none"
        nodesDraggable={false}
        fitView
      >
        {/* <Controls /> */}
        <Background />
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
