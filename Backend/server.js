import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.use((req, res, next) => {
  if (req.path.startsWith("/lesson")) {
    res.removeHeader("Content-Security-Policy");
    res.setHeader(
      "Content-Security-Policy",
      "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;"
    );
  }
  next();
});


app.post("/lesson", async (req, res) => {
  try {
    const { object } = req.body;

    const prompt = `
You are EchoGlass 2035, an AI that generates very short micro-lessons.
Write a 5-line micro-lesson about: ${object}
Format:
1. Simple explanation
2. One important fact
3. One surprising fact
4. One example in real life
5. One curiosity

Make it friendly, educational, futuristic.
`;

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("DEEPSEEK ERROR:", data);
      return res.status(500).json({ error: data });
    }

    const lesson = data.choices[0].message.content;
    res.json({ lesson });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    res.status(500).json({ error: err.toString() });
  }
});

app.listen(3001, () => {
  console.log("Backend running on port 3001");
  console.log("DeepSeek key loaded:", process.env.DEEPSEEK_API_KEY ? "OK" : "NOT FOUND");
});
