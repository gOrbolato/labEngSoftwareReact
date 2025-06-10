import React, { useState } from 'react';

export default function Form2() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
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
      <h2>Form2</h2>
      <label style={{ display: "block", marginBottom: 8 }}>
        First name:
        <input
          name="firstName" 
          value={person.firstName}
          onChange={handleChange} 
          style={{ marginLeft: 8, padding: "6px", borderRadius: 4, border: "1px solid #ccc", width: "70%" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: 8 }}>
        Last name:
        <input
          name="lastName" 
          value={person.lastName}
          onChange={handleChange} 
          style={{ marginLeft: 8, padding: "6px", borderRadius: 4, border: "1px solid #ccc", width: "70%" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: 16 }}>
        Email:
        <input
          name="email" 
          type="email"
          value={person.email}
          onChange={handleChange} 
          style={{ marginLeft: 8, padding: "6px", borderRadius: 4, border: "1px solid #ccc", width: "70%" }}
        />
      </label>
      <p style={{ fontFamily: "monospace" }}>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </form>
  );
}