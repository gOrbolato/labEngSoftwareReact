import React, { useState } from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

function BucketItem({ artwork, onToggle }) {
  return (
    <li
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
      <span>{artwork.title}</span>
      <label style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={artwork.seen}
          onChange={e => onToggle(artwork.id, e.target.checked)}
          style={{ marginLeft: 8 }}
        />
        <span style={{ marginLeft: 4 }}>
          {artwork.seen ? "Visto" : "Não visto"}
        </span>
      </label>
    </li>
  );
}

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(list =>
      list.map(artwork =>
        artwork.id === artworkId
          ? { ...artwork, seen: nextSeen }
          : artwork
      )
    );
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(list =>
      list.map(artwork =>
        artwork.id === artworkId
          ? { ...artwork, seen: nextSeen }
          : artwork
      )
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Minha Lista de Obras</h2>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {myList.map(artwork => (
          <BucketItem
            key={artwork.id}
            artwork={artwork}
            onToggle={handleToggleMyList}
          />
        ))}
      </ul>
      <h2>Sua Lista de Obras</h2>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {yourList.map(artwork => (
          <BucketItem
            key={artwork.id}
            artwork={artwork}
            onToggle={handleToggleYourList}
          />
        ))}
      </ul>
    </div>
  );
}