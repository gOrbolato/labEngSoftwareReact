import React, { useState } from 'react';

const FormQuiz = () => {
  const [resposta, setResposta] = useState('');
  const [feedback, setFeedback] = useState('');
  const respostaCorreta = 'react';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resposta.trim().toLowerCase() === respostaCorreta) {
      setFeedback('Correto!');
    } else {
      setFeedback('Incorreto. Tente novamente.');
    }
  };

  return (
    <div style={{ padding: '10px' }}>
      <p style={{ fontSize: '18px', marginBottom: '10px' }}>
        <strong>Quiz:</strong> Qual biblioteca é utilizada para construir interfaces de usuário?
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite sua resposta..."
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
          required
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Enviar
        </button>
      </form>
      {feedback && (
        <p style={{ marginTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>
          {feedback}
        </p>
      )}
    </div>
  );
};

export default FormQuiz;
