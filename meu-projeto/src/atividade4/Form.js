import React, { useState } from 'react';

export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`Você disse "${message}" para ${to}`);
    }, 2000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: 24,
        background: "#f5f5f5",
        borderRadius: 8,
        maxWidth: 400,
        margin: "0 auto"
      }}
    >
      <h2>Enviar Mensagem</h2>
      <label style={{ display: "block", marginBottom: 12 }}>
        Para:
        <select
          value={to}
          onChange={e => setTo(e.target.value)}
          style={{
            marginLeft: 8,
            padding: "6px",
            borderRadius: 4,
            border: "1px solid #ccc"
          }}
        >
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <label style={{ display: "block", marginBottom: 16 }}>
        Mensagem:
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          style={{
            marginLeft: 8,
            padding: "6px",
            borderRadius: 4,
            border: "1px solid #ccc",
            width: "70%"
          }}
        />
      </label>
      <button
        type="submit"
        style={{
          padding: "8px 16px",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Enviar
      </button>
    </form>
  );
}