// Vercel Serverless Function: /api/chat
export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const { messages } = req.body || {};
        if (!Array.isArray(messages)) {
            return res.status(400).json({ error: "messages must be an array" });
        }

        // Call OpenAI-compatible chat completions
        const r = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",     // good/cost-effective; change if you prefer
                temperature: 0.2,
                messages,
            }),
        });

        if (!r.ok) {
            const errText = await r.text();
            return res.status(r.status).json({ error: errText });
        }

        const data = await r.json();
        const reply = data?.choices?.[0]?.message?.content ?? "Sorry, I couldn’t answer that.";
        return res.status(200).json({ reply });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
