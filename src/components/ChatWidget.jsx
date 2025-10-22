import { useEffect, useRef, useState } from "react";

const SYS_PROMPT =
    "You are Farm Nexus Tech’s helpful assistant. Be concise, friendly, and practical. " +
    "If the user writes in Tamil, reply in Tamil. Focus on polyhouse/IoT/subsidies in Tamil Nadu. " +
    "If unsure, ask a short clarifying question.";

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [msgs, setMsgs] = useState([
        { role: "assistant", content: "Vanakkam! 👋 How can I help with polyhouses, IoT, or subsidies?" },
    ]);
    const boxRef = useRef(null);

    useEffect(() => {
        if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }, [msgs, open]);

    async function sendMessage(e) {
        e.preventDefault();
        const text = input.trim();
        if (!text) return;
        const next = [...msgs, { role: "user", content: text }];
        setMsgs(next);
        setInput("");

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [
                        { role: "system", content: SYS_PROMPT },
                        ...next,
                    ],
                }),
            });
            const data = await res.json();
            if (data?.reply) {
                setMsgs(m => [...m, { role: "assistant", content: data.reply }]);
            } else {
                setMsgs(m => [...m, { role: "assistant", content: "Sorry, I couldn’t get a reply." }]);
            }
        } catch (err) {
            setMsgs(m => [...m, { role: "assistant", content: "Network error. Please try again." }]);
        }
    }

    return (
        <>
            {/* Floating launcher */}
            <button
                onClick={() => setOpen(v => !v)}
                className="fixed bottom-4 right-4 z-50 rounded-full bg-green-700 text-white px-4 py-3 shadow-lg hover:bg-green-800"
                aria-label="Open chat"
            >
                {open ? "Close" : "Chat with us"}
            </button>

            {/* Panel */}
            {open && (
                <div className="fixed bottom-20 right-4 z-50 w-80 sm:w-96 rounded-xl border bg-white shadow-2xl overflow-hidden">
                    <div className="bg-green-700 text-white px-4 py-3 font-medium">
                        Farm Nexus Assistant
                    </div>

                    <div ref={boxRef} className="h-80 overflow-y-auto space-y-3 p-3 bg-slate-50">
                        {msgs.map((m, i) => (
                            <div
                                key={i}
                                className={`max-w-[85%] p-3 rounded-xl ${m.role === "user" ? "ml-auto bg-green-600 text-white" : "bg-white border"
                                    }`}
                            >
                                {m.content}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={sendMessage} className="flex gap-2 p-3 border-t bg-white">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about polyhouse, IoT, subsidy…"
                            className="flex-1 rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
                        />
                        <button className="rounded-lg bg-green-700 text-white px-4 hover:bg-green-800">
                            Send
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
