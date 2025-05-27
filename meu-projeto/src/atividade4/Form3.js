import React, { useState } from 'react';

export default function Form3() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/SdIAgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <form style={{
      padding: 24,
      background: "#f5f5f5",
      borderRadius: 8,
      maxWidth: 400,
      margin: "0 auto"
    }}>
      <h2>Artista e Obra</h2>
      <label style={{ display: "block", marginBottom: 8 }}>
        Nome do artista:
        <input
          value={person.name}
          onChange={handleNameChange}
          style={{
            marginLeft: 8,
            padding: "6px",
            borderRadius: 4,
            border: "1px solid #ccc",
            width: "70%"
          }}
        />
      </label>
      <label style={{ display: "block", marginBottom: 8 }}>
        Título da obra:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
          style={{
            marginLeft: 8,
            padding: "6px",
            borderRadius: 4,
            border: "1px solid #ccc",
            width: "70%"
          }}
        />
      </label>
      <label style={{ display: "block", marginBottom: 8 }}>
        Cidade:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
          style={{
            marginLeft: 8,
            padding: "6px",
            borderRadius: 4,
            border: "1px solid #ccc",
            width: "70%"
          }}
        />
      </label>
      <label style={{ display: "block", marginBottom: 16 }}>
        URL da imagem:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
          style={{
            marginLeft: 8,
            padding: "6px",
            borderRadius: 4,
            border: "1px solid #ccc",
            width: "70%"
          }}
        />
      </label>
      <div style={{
        background: "#fff",
        borderRadius: 8,
        padding: 12,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
      }}>
        <p><b>{person.artwork.title}</b> de {person.name} (local: {person.artwork.city})</p>
        <img
          src={person.artwork.image}
          alt={person.artwork.title}
          style={{
            width: "100%",
            maxWidth: 320,
            borderRadius: 8,
            marginTop: 8
          }}
        />
      </div>
    </form>
  );
}