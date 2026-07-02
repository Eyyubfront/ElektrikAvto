import React, { useState } from "react";
import { askGemini } from "../../../gemini.js";

const GeminiChat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!text.trim()) return;

    setLoading(true);
    const res = await askGemini(text);
    setAnswer(res);
    setLoading(false);
  };

  return (
    <>
      
      <button
        onClick={() => setOpen(!open)}
        className="fixed cursor-pointer bottom-6 right-6 w-14 h-14 rounded-full bg-gray-900 text-white text-2xl shadow-lg hover:scale-105 transition z-50"
      >
        🤖
      </button>
      {open && (
        <div className="fixed  bottom-24 right-0 w-80 h-[420px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50">

      <div className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
  <div className="flex flex-col">
    <span className="font-semibold flex items-center gap-2">
      🤖 AI Köməkçiniz
    </span>
    <span className="text-xs text-gray-300">
      Sizin smart köməkçiniz • 24/7 aktiv
    </span>
  </div>

  <button
    onClick={() => setOpen(false)}
    className="text-white/70 hover:text-white"
  >
    ✖
  </button>
</div>

    
          <div className="flex-1 p-3 overflow-y-auto bg-gray-50 text-sm">
            {loading ? (
              <p className="text-gray-500 animate-pulse">Thinking...</p>
            ) : (
              <p className="text-gray-700 whitespace-pre-wrap">
                {answer || "Salam 👋  Sizə suallarınızda kömək etmək üçün buradayam."}
              </p>
            )}
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Sual yaz..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <button
              onClick={handleAsk}
              className="bg-gray-900 cursor-pointer text-white px-4 rounded-lg text-sm hover:bg-gray-800"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiChat;