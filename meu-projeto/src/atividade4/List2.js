import React, { useState } from 'react';

const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

export default function List2() {
  const [artists, setArtists] = useState(initialArtists);

  function handleRemove(id) {
    setArtists(artists => artists.filter(artist => artist.id !== id));
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>List2</h2>
      <ul style={{ padding: 0, listStyle: "none" }}>
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
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}