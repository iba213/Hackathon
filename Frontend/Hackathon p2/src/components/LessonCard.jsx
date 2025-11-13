export default function LessonCard({ lesson }) {
  if (!lesson) return null;

  return (
    <div className="mt-4 p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg text-white max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Micro-Lesson</h2>
      <pre className="whitespace-pre-wrap text-sm leading-relaxed">
        {lesson}
      </pre>
    </div>
  );
}
