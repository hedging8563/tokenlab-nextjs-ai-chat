"use client";

import { useChat } from "@ai-sdk/react";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit, status } = useChat();

  return (
    <main style={{ maxWidth: 720, margin: "48px auto", fontFamily: "system-ui" }}>
      <h1>TokenLab Next.js Chat</h1>
      <div style={{ display: "grid", gap: 12, margin: "24px 0" }}>
        {messages.map((message) => (
          <div key={message.id}>
            <strong>{message.role}: </strong>
            {message.parts.map((part, index) =>
              part.type === "text" ? <span key={index}>{part.text}</span> : null
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask TokenLab..."
          style={{ flex: 1, padding: 12 }}
        />
        <button disabled={status !== "ready"} style={{ padding: "12px 16px" }}>
          Send
        </button>
      </form>
    </main>
  );
}
