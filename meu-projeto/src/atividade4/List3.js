import React, { useState } from 'react';

let nextId = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

export default function List3() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialArtists);

  function handleAdd() {
    if (!name.trim()) return;
    const insertAt = 1;
    const nextArtists = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name.trim() },
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Lista de Artistas</h2>
      <input
        placeholder="Novo artista"
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
        Adicionar no meio
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
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
            }}
          >
            {artist.name}
          </li>
        ))}
      </ul>
    </div>
  );
}