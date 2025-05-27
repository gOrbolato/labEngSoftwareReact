import React, { useState } from 'react';

export default function Form2() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
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
      <h2>Dados da Pessoa</h2>
      <label style={{ display: "block", marginBottom: 8 }}>
        Nome:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
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
        Sobrenome:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
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
        Email:
        <input
          type="email"
          value={person.email}
          onChange={handleEmailChange}
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
        <p>
          <b>Nome completo:</b> {person.firstName} {person.lastName}<br />
          <b>Email:</b> {person.email}
        </p>
      </div>
    </form>
  );
}