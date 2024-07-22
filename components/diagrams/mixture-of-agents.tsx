import GraphDiagram from "@/components/DocsGraphDiagram";

export default function Diagram() {
  return (
    <div className="h-64 w-full">
      <GraphDiagram
        json={{
          nodes: [
            {
              id: "c1",
              name: "ComputeText",
              input: "propose",
            },
            {
              id: "c2",
              name: "ComputeText",
              input: "propose",
            },
            {
              id: "c3",
              name: "ComputeText",
              input: "propose",
            },
            {
              id: "e",
              name: "ComputeText",
              input: "evaluate",
            },
            {
              id: "a",
              name: "ComputeText",
              input: "summarize",
            },
          ],
          edges: [
            ["c1", "e"],
            ["c2", "e"],
            ["c3", "e"],
            ["e", "a"],
          ],
        }}
      />
    </div>
  );
}
