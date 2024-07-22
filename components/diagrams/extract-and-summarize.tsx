import GraphDiagram from "@/components/DocsGraphDiagram";

export default function Diagram() {
  return (
    <div className="h-64 w-full">
      <GraphDiagram
        json={{
          nodes: [
            {
              id: "p1",
              name: "ComputeJSON",
              input: "comment",
            },
            {
              id: "p2",
              name: "ComputeJSON",
              input: "comment",
            },
            {
              id: "p3",
              name: "ComputeJSON",
              input: "comment",
            },
            {
              id: "t",
              name: "ComputeText",
              output: "markdown",
            },
          ],
          edges: [
            ["p1", "t"],
            ["p2", "t"],
            ["p3", "t"],
          ],
        }}
      />
    </div>
  );
}
