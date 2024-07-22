import GraphDiagram from "@/components/diagrams/GraphDiagram";

export function FirstGraph() {
  return (
    <div className="relative w-full aspect-[3/2] br-transparent rounded-br-2xl rounded-bl-2xl">
      <GraphDiagram
        json={{
          nodes: [
            {
              id: "text_1",
              prefix: '"description of a mythical forest creature"',
              name: "ComputeText",
              texts: [
                '"a majestic being with the body of a deer and the wings of an eagle..."',
              ],
            },
            {
              id: "image_1",
              name: "GenerateImage",
              prefix: '"woodblock printed: a majestic being..."',
              image: "https://media.substrate.run/woodblock.jpg",
            },
            {
              id: "image_2",
              name: "GenerateImage",
              prefix: '"art nouveau poster: a majestic being..."',
              image: "https://media.substrate.run/nouveau.jpg",
            },
          ],
          edges: [
            ["text_1", "image_1"],
            ["text_1", "image_2"],
          ],
        }}
      />
    </div>
  );
}
