import GraphDiagram from "@/components/DocsGraphDiagram";

export default function Diagram() {
  return (
    <div className="h-64 w-full">
      <GraphDiagram
        json={{
          nodes: [
            {
              id: "c1",
              name: "ComputeJSON",
              input: "generate query",
            },
            {
              id: "r",
              name: "RunPython",
              input: "run search",
            },
            {
              id: "c2",
              name: "ComputeJSON",
              input: "generate response",
            },
          ],
          edges: [
            ["c1", "r"],
            ["r", "c2"],
          ],
        }}
      />
    </div>
  );
}
