import { useState } from "react";

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
    <div style={{ padding: 24, position: 'relative' }}>
      <h2>ShapeEditor</h2>
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
        Move circles down!
      </button>
      
      <div style={{ position: 'relative', height: '200px', border: '1px solid black', background: '#f9f9f9' }}>
        {shapes.map(shape => (
          <div
            key={shape.id}
            style={{
              background: 'purple', 
              position: 'absolute',
              left: shape.x,
              top: shape.y,
              borderRadius:
                shape.type === 'circle'
                  ? '50%'
                  : '',
              width: 20,
              height: 20,
            }} 
          />
        ))}
      </div>
    </div>
  );
}