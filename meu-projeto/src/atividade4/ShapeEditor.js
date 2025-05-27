import React, { useState } from "react";

const initialShapes = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "square", x: 150, y: 100 },
  { id: 2, type: "circle", x: 250, y: 100 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleMoveCircles() {
    setShapes(shapes =>
      shapes.map(shape =>
        shape.type === "circle"
          ? { ...shape, y: shape.y + 50 }
          : shape
      )
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Editor de Formas</h2>
      <button
        onClick={handleMoveCircles}
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
        Mover círculos para baixo
      </button>
      <svg width={320} height={220} style={{ background: "#f5f5f5", borderRadius: 8 }}>
        {shapes.map(shape =>
          shape.type === "circle" ? (
            <circle
              key={shape.id}
              cx={shape.x}
              cy={shape.y}
              r={30}
              fill="#1976d2"
              stroke="#1565c0"
              strokeWidth={2}
            />
          ) : (
            <rect
              key={shape.id}
              x={shape.x - 30}
              y={shape.y - 30}
              width={60}
              height={60}
              fill="#43a047"
              stroke="#2e7d32"
              strokeWidth={2}
              rx={8}
            />
          )
        )}
      </svg>
    </div>
  );
}