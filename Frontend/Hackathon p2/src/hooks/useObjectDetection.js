import { useState, useEffect } from "react";
import { pipeline } from "@xenova/transformers";

export default function useObjectDetection(videoRef) {
  const [detections, setDetections] = useState([]);

  useEffect(() => {
    async function loadModel() {
      console.log("Loading YOLO model...");

      const model = await pipeline("object-detection", "Xenova/yolov8n");

      console.log("YOLO model ready!");

      setInterval(async () => {
        if (!videoRef.current) return;

        const result = await model(videoRef.current);

        setDetections(result);
      }, 500); // Every 500ms
    }

    loadModel();
  }, []);

  return detections;
}
