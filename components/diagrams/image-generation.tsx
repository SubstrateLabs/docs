import GraphDiagram from "@/components/DocsGraphDiagram";

export default function Diagram() {
  return (
    <div className="h-64 w-full">
      <GraphDiagram
        json={{
          nodes: [
            {
              name: "ComputeText",
              id: "text",
              input: "text",
            },
            {
              name: "GenerateImage",
              id: "image",
              input: "image",
            },
            {
              name: "UpscaleImage",
              id: "upscale",
              input: "upscale",
            },
          ],
          edges: [
            ["text", "image"],
            ["image", "upscale"],
          ],
        }}
      />
    </div>
  );
}
