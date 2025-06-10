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


  function handlePersonChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }


  function handleArtworkChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        [e.target.name]: e.target.value
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
      <h2>Form3</h2>
      <label style={{ display: "block", marginBottom: 8 }}>
        Name:
        <input
          name="name"
          value={person.name}
          onChange={handlePersonChange}
          style={{ marginLeft: 8, padding: "6px", borderRadius: 4, border: "1px solid #ccc", width: "70%" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: 8 }}>
        Title:
        <input
          name="title"
          value={person.artwork.title}
          onChange={handleArtworkChange}
          style={{ marginLeft: 8, padding: "6px", borderRadius: 4, border: "1px solid #ccc", width: "70%" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: 8 }}>
        City:
        <input
          name="city"
          value={person.artwork.city}
          onChange={handleArtworkChange}
          style={{ marginLeft: 8, padding: "6px", borderRadius: 4, border: "1px solid #ccc", width: "70%" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: 16 }}>
        Image:
        <input
          name="image"
          value={person.artwork.image}
          onChange={handleArtworkChange}
          style={{ marginLeft: 8, padding: "6px", borderRadius: 4, border: "1px solid #ccc", width: "70%" }}
        />
      </label>
      <div style={{
        background: "#fff",
        borderRadius: 8,
        padding: 12,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
      }}>
        <p>
          <i>{person.artwork.title}</i>
          {' by '}
          {person.name}
          {' (located in '}
          {person.artwork.city}
          {')'}
        </p>
        <img
          src={person.artwork.image}
          alt={person.artwork.title}
          style={{ width: "100%", maxWidth: 320, borderRadius: 8, marginTop: 8 }}
        />
      </div>
    </form>
  );
}