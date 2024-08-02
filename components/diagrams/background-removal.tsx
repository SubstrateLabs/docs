import GraphDiagram from "@/components/DocsGraphDiagram";

export default function Diagram() {
  return (
    <div className="h-64 w-full">
      <GraphDiagram
        json={{
          nodes: [
            {
              id: "image",
              name: "GenerateImage",
              input: "image",
            },
            {
              id: "mask",
              name: "RemoveBackground",
              input: "mask",
            },
            {
              id: "erase",
              name: "EraseImage",
              input: "erase",
            },
            {
              id: "inpaint",
              name: "InpaintImage",
              input: "inpaint",
            },
          ],
          edges: [
            ["image", "mask"],
            ["mask", "erase"],
            ["erase", "inpaint"],
          ],
        }}
      />
    </div>
  );
}
