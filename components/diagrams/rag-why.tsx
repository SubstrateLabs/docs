import GraphDiagram from "@/components/DocsGraphDiagram";

export default function RAG() {
  return (
    <div className="h-64 w-full">
      <GraphDiagram
        json={{
          nodes: [
            {
              id: "q",
              name: "QueryVectorStore",
              input: "semantic search",
            },
            {
              id: "r",
              name: "RunPython",
              input: "use tool",
            },
            {
              id: "j",
              name: "ComputeJSON",
              input: "clean data",
            },
            {
              id: "t",
              name: "ComputeText",
              input: "generate response",
            },
          ],
          edges: [
            ["q", "j"],
            ["r", "j"],
            ["j", "t"],
          ],
        }}
      />
    </div>
  );
}
