import React, { useState } from "react";
import CameraFeed from "./components/CameraFeed";
import LessonCard from "./components/LessonCard";

export default function App() {
  const [lesson, setLesson] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-6">
      <h1 className="text-4xl font-bold mb-4">EchoGlass 2035 🔮</h1>
      <p className="text-gray-300 mb-6">
        Point the camera at an object — YOLO will detect it and AI will teach you about it!
      </p>

      {/* CAMERA + YOLO DETECTION */}
      <CameraFeed setLesson={setLesson} />

      {/* MICRO-LESSON RESULT */}
      <LessonCard lesson={lesson} />
    </div>
  );
}
