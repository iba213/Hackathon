export default function LessonCard({ lesson }) {
  if (!lesson) return null;

  return (
    <div className="mt-6 w-[90%] max-w-xl bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl animate-fade-in">
      <h2 className="text-xl font-bold text-cyan-300 mb-3">
        📘 Micro-Lesson
      </h2>

      <p className="text-white leading-relaxed whitespace-pre-line">
        {lesson}
      </p>
    </div>
  );
}
