export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { systemPrompt, history } = req.body || {};
  if (!systemPrompt || !Array.isArray(history)) {
    return res.status(400).json({ error: "Missing systemPrompt or history" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  const model = "gemini-3.6-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  try {
    const geminiRes = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: history,
        generationConfig: { maxOutputTokens: 400 },
      }),
    });

    const data = await geminiRes.json();
    if (!geminiRes.ok) {
      return res.status(geminiRes.status).json({ error: data.error?.message || "Gemini error" });
    }
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}