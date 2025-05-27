import React, { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  function handleIncrement() {
    // Usando o callback para garantir incremento correto
    setNumber(n => n + 1);
    setNumber(n => n + 1);
    setNumber(n => n + 1);
  }

  function handleReset() {
    setNumber(0);
  }

  return (
    <div style={{
      padding: 24,
      background: "#f5f5f5",
      borderRadius: 8,
      maxWidth: 300,
      margin: "0 auto",
      textAlign: "center"
    }}>
      <h2>Contador</h2>
      <h1 style={{ fontSize: 48, margin: "16px 0" }}>{number}</h1>
      <button
        onClick={handleIncrement}
        style={{
          padding: "8px 16px",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          fontWeight: "bold",
          cursor: "pointer",
          marginRight: 8
        }}
      >
        +3
      </button>
      <button
        onClick={handleReset}
        style={{
          padding: "8px 16px",
          background: "#d32f2f",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Resetar
      </button>
    </div>
  );
}