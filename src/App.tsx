import { useState } from "react";
import "./App.css";
import ExifTest3Image from "./assets/exif-test-3.jpg";
import { ImageOrientationTest } from "./ImageOrientationTest";

const DEFAULT_REMOTE_SRC =
  "https://storage.googleapis.com/hasty-storage-kp/projects/f88cfc34-04a5-42e6-8e21-86e87334c7f6/images/a93edf43-4c09-4d74-a39d-00c7899ffde0.jpg?Expires=1737464400&GoogleAccessId=hasty-kp-app%40labelz-215311.iam.gserviceaccount.com&Signature=JCvVLg4QIq%2BGx2vE4RSLkwxe1wjBgDlWznN4ndqo3xpcZT5hrPLTBAPLNnwwaNYCEhD9Zhbcq6cAJFEzei8UkTFetDZHz60N2AEZwfayTJkpwvcMx9eHq022%2Fz0V1FVWPGrk9oMfO%2Fwn0wm4DWJmp58QJnyWBk79TRzYSTx5qaiW%2FQBfWBMP5nS4yMJ1TwbKnz39XSogDBxfAoLZHCudlK7e%2Fx01ERSIHC9BxIrm5PcX0UmdRJFrI3chYOWavo2ygr26OSRW0kul4ZBLNsNtYfCul%2B7Fs2KFNM9zXOJpmnL%2FfA6k7%2FbEFD6ajoYCVQiSXFh%2BsogdLxcLV4scCRvXYw%3D%3D";

function App() {
  const [src, setSrc] = useState(ExifTest3Image);
  const [remoteSrc, setRemoteSrc] = useState(DEFAULT_REMOTE_SRC);

  const toggleImageSrc = () => {
    setSrc((prev) => (prev === ExifTest3Image ? remoteSrc : ExifTest3Image));
  };
  
  const stageRef = useRef(null);
  
  // Set CSS background when component mounts
  useEffect(() => {
    if (stageRef.current) {
      // Apply CSS background to stage container
      const container = stageRef.current.container();
      container.style.imageOrientation = 'none';
    }
  }, []);

  return (
    <>
      <div>
        <div className="input-wrapper">
          <button onClick={toggleImageSrc}>
            Toggle Image src ({src === ExifTest3Image ? "local" : "remote"})
          </button>
          <input
            type="text"
            style={{
              visibility: src === ExifTest3Image ? "hidden" : "visible",
            }}
            value={remoteSrc}
            onChange={(e) => {
              const value = e.target.value;
              if (value) {
                setRemoteSrc(value);
              } else {
                setRemoteSrc(DEFAULT_REMOTE_SRC);
              }
            }}
          />
        </div>
        <hr />
        <ImageOrientationTest src={src} />
      </div>
    </>
  );
}

export default App;
