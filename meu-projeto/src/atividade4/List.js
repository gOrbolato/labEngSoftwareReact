import React, { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  function handleAdd() {
    if (!name.trim()) return;
    setArtists([
      ...artists,
      { id: nextId++, name: name.trim() }
    ]);
    setName('');
  }

  function handleRemove(id) {
    setArtists(artists => artists.filter(artist => artist.id !== id));
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Escultores Inspiradores</h2>
      <input
        placeholder="Nome do escultor"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: 4,
          border: "1px solid #ccc",
          marginRight: 8
        }}
      />
      <button
        onClick={handleAdd}
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
        Adicionar
      </button>
      <ul style={{ padding: 0, listStyle: "none", marginTop: 16 }}>
        {artists.map(artist => (
          <li
            key={artist.id}
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
            <span>{artist.name}</span>
            <button
              onClick={() => handleRemove(artist.id)}
              style={{
                padding: "4px 12px",
                background: "#d32f2f",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}