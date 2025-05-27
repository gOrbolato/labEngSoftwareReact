import React, { useState } from 'react';

const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export default function List4() {
  const [list, setList] = useState(initialList);

  function handleReverse() {
    setList(prevList => [...prevList].reverse());
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Lista de Obras</h2>
      <button
        onClick={handleReverse}
        style={{
          padding: "8px 16px",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: 16
        }}
      >
        Inverter ordem
      </button>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {list.map(item => (
          <li
            key={item.id}
            style={{
              background: "#f5f5f5",
              marginBottom: 8,
              padding: "8px 12px",
              borderRadius: 4,
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}