import React, { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(i => (i + 1) % sculptureList.length);
  }

  function handleMoreClick() {
    setShowMore(show => !show);
  }

  const sculpture = sculptureList[index];

  return (
    <div style={{ padding: 24, maxWidth: 400 }}>
      <h2>Gallery</h2>
      <button
        onClick={handleNextClick}
        style={{
          padding: "8px 16px",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: 16,
          marginRight: 8
        }}
      >
        Next
      </button>
      
      <span style={{ color: "#555" }}>
        ({index + 1} of {sculptureList.length})
      </span>
      
      <h3 style={{ marginTop: 16 }}>{sculpture.name} by {sculpture.artist}</h3>
      
      <img
        src={sculpture.url}
        alt={sculpture.name}
        style={{
          width: "100%",
          maxWidth: 350,
          borderRadius: 8,
          margin: "16px 0",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
        }}
      />
      <button
        onClick={handleMoreClick}
        style={{
          padding: "6px 12px",
          background: "#43a047",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: 8
        }}
      >
        {showMore ? "Hide details" : "Show details"}
      </button>
      {showMore && (
        <p style={{ marginTop: 8 }}>{sculpture.description}</p>
      )}
    </div>
  );
}