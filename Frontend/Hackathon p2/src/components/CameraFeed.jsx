import React, { useEffect, useRef, useState } from "react";
import useObjectDetection from "../hooks/useObjectDetection";
import LessonCard from "../components/LessonCard";
import { getMicroLesson } from "../utils/api";

export default function CameraFeed() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const lastObjectRef = useRef("");
  const [lesson, setLesson] = useState("");
  const [label, setLabel] = useState("");
  const detections = useObjectDetection(videoRef);

 
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    });
  }, []);

  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!videoRef.current) return;

    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    detections.forEach((det) => {
      const [x, y, w, h] = det.bbox;

      ctx.strokeStyle = "rgba(0,255,255,0.9)";
      ctx.shadowColor = "cyan";
      ctx.shadowBlur = 10;
      ctx.lineWidth = 3;

      ctx.strokeRect(x, y, w, h);

      ctx.fillStyle = "#00FFFF";
      ctx.font = "18px Arial";
      ctx.fillText(`${det.class} (${(det.score * 100).toFixed(1)}%)`, x, y - 5);
    });
  }, [detections]);

  
  useEffect(() => {
    if (detections.length === 0) return;

    const objectName = detections[0].class;
    setLabel(objectName);

    if (objectName !== lastObjectRef.current) {
      lastObjectRef.current = objectName;

      getMicroLesson(objectName).then((text) => {
        setLesson(text);
      });
    }
  }, [detections]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex justify-center mt-6 border border-cyan-500/30 rounded-xl shadow-[0_0_25px_rgba(0,255,255,0.3)] p-2 backdrop-blur-md">

        <video ref={videoRef} className="rounded-xl shadow-xl" />
        <canvas ref={canvasRef} className="absolute top-0 left-0" />
      </div>

      {}
      {label && (
        <div className="mt-3 text-white text-lg font-semibold">
          🔍 Identified: {label}
        </div>
      )}

      <LessonCard lesson={lesson} />
    </div>
  );
}
