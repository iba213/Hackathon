export const getMicroLesson = async (objectName) => {
  const res = await fetch("http://localhost:3001/lesson", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ object: objectName }),
  });

  const data = await res.json();
  return data.lesson;
};
