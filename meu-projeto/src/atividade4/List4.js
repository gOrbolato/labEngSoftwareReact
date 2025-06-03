import React, { useState } from 'react';

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: false },
];

function ItemList({ artworks, onToggle }) {
  return (
    <ul style={{ padding: 0, listStyle: 'none' }}>
      {artworks.map(artwork => (
        <li key={artwork.id} style={{ marginBottom: 8 }}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(artwork.id, e.target.checked);
              }}
            />{' '}
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(myList =>
      myList.map(item =>
        item.id === artworkId ? { ...item, seen: nextSeen } : item
      )
    );
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(yourList =>
      yourList.map(item =>
        item.id === artworkId ? { ...item, seen: nextSeen } : item
      )
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Minha lista de obras</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Sua lista de obras</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </div>
  );
}