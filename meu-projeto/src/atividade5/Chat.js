import React, { useState } from 'react';

const Chat = ({ contact }) => {
  const [mensagem, setMensagem] = useState('');

  const enviarMensagem = () => {
    if (mensagem.trim() !== '') {
      console.log(`Enviando mensagem para ${contact.name} (${contact.email}): ${mensagem}`);
      setMensagem('');
    }
  };

  return (
    <div>
      <h3 style={{ marginBottom: '15px' }}>Chat com {contact.name}</h3>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <input
          type="text"
          placeholder={`Digite sua mensagem para ${contact.name}...`}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          style={{
            flex: '1',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            marginRight: '10px'
          }}
        />
        <button
          onClick={enviarMensagem}
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
      </div>
    </div>
  );
};

export default Chat;
