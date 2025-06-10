import { useState } from 'react';

const initialCounters = [0, 0, 0];

export default function CounterList() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index) {
    setCounters(counters =>
      counters.map((c, i) => (i === index ? c + 1 : c))
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>CounterList</h2>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {counters.map((count, i) => (
          <li
            key={i}
            style={{
              background: "#f5f5f5",
              marginBottom: 8,
              padding: "8px 12px",
              borderRadius: 4,
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <span>{count}</span>
            <button
              onClick={() => handleIncrementClick(i)}
              style={{
                padding: "4px 12px",
                background: "#1976d2",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              +1
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}