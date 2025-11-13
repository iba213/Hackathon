import { useState, useEffect } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

export default function useObjectDetection(videoRef) {
  const [detections, setDetections] = useState([]);

  useEffect(() => {
    let model;

    async function start() {
      console.log("Loading COCO-SSD model...");
      model = await cocoSsd.load();
      console.log("Model ready!");

      setInterval(async () => {
        if (!videoRef.current) return;

        const predictions = await model.detect(videoRef.current);

        setDetections(
          predictions.map((p) => ({
            class: p.class,
            score: p.score,
            bbox: p.bbox, // [x, y, width, height]
          }))
        );
      }, 500);
    }

    start();
  }, []);

  return detections;
}
