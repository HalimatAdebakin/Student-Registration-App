import React from 'react';
import Webcam from "react-webcam";
import { useCallback, useRef,  useState  } from "react"; 

function Customcam() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  return (
    <div className="container">
       {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
    <Webcam  className="rounded h-32 w-32" ref={webcamRef} />
    )}
     <div className="btn-container bg-blue-700 border rounded-full w-20 p-2">
        <button onClick={capture}>Capture</button>
      </div>
  </div>
  )
}

export default Customcam