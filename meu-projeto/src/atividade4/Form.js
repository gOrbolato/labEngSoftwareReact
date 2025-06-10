import React, { useState } from 'react';

export default function Form() {
  const [to, setTo] = useState('Bob');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said "${message}" to ${to}`);
    }, 2000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: 24,
        background: "#f5f5f5",
        borderRadius: 8,
        maxWidth: 400,
        margin: "0 auto"
      }}
    >
      <h2>Form</h2>
      <label style={{ display: "block", marginBottom: 12 }}>
        To:
        <select
          value={to}
          onChange={e => setTo(e.target.value)}
          style={{
            marginLeft: 8,
            padding: "6px",
            borderRadius: 4,
            border: "1px solid #ccc"
          }}
        >
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        style={{
          display: 'block',
          width: '95%',
          marginBottom: 16,
          padding: "6px",
          borderRadius: 4,
          border: "1px solid #ccc",
          minHeight: '60px'
        }}
      />
      
      <button
        type="submit"
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
        Send
      </button>
    </form>
  );
}