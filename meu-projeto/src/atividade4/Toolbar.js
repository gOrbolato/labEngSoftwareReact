import React from "react";

function Button({ onClick, children, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        margin: "0 8px 8px 0",
        border: "none",
        borderRadius: "4px",
        background: "#1976d2",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
        transition: "background 0.2s",
        ...style
      }}
      onMouseOver={e => (e.currentTarget.style.background = "#1565c0")}
      onMouseOut={e => (e.currentTarget.style.background = "#1976d2")}
    >
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }
  return (
    <Button onClick={handlePlayClick}>
      Play Movie
    </Button>
  );
}

function UploadButton() {
  function handleUploadClick() {
    alert("Uploading image!");
  }
  return (

    <Button onClick={handleUploadClick} style={{ background: "#43a047" }}>
      Upload Image
    </Button>
  );
}

export default function Toolbar() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      padding: "16px",
      background: "#f5f5f5",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
    }}>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}