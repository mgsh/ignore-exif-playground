import { Stage, Layer, Image as KonvaImage } from "react-konva";
import useImage from "use-image";

export const ImageOrientationTest = ({ src }: { src: string }) => {
  const [image] = useImage(src);

  return (
    <>
      <h1>Img:</h1>
      <div className="test-row">
        <div className="test-case">
          <h2>imageOrientation: from-image</h2>
          <img
            src={src}
            alt="ExifTest3Image from-image"
            style={{
              imageOrientation: "from-image",
            }}
          />
        </div>
        <div className="test-case">
          <h2>imageOrientation: none</h2>
          <img
            src={src}
            alt="ExifTest3Image None"
            style={{
              imageOrientation: "none",
            }}
          />
        </div>
      </div>
      <h1>konva js:</h1>
      <div className="test-row">
        <div className="test-case">
          <h2>imageOrientation: from-image</h2>
          <Stage
            width={450}
            height={300}
            style={{ imageOrientation: "from-image" }}
          >
            <Layer>
              <KonvaImage image={image} width={450} height={300} />
            </Layer>
          </Stage>
        </div>
        <div className="test-case" style="image-orientation: none;">
          <h2>imageOrientation: none</h2>
          <Stage width={450} height={300}>
            <Layer>
              <KonvaImage image={image} width={450} height={300} />
            </Layer>
          </Stage>
        </div>
      </div>
    </>
  );
};
