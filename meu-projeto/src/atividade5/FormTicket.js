import React, { useState } from 'react';

const FormTicket = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ticket enviado:', formData);
    setEnviado(true);
  };

  return (
    <div style={{ padding: '10px' }}>
      <h3>Envie seu ticket</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu nome"
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu email"
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Assunto:</label>
          <input
            type="text"
            name="assunto"
            value={formData.assunto}
            onChange={handleChange}
            placeholder="Assunto do ticket"
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Mensagem:</label>
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Detalhe sua mensagem"
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Enviar Ticket
        </button>
      </form>
      {enviado && (
        <div
          style={{
            marginTop: '15px',
            padding: '10px',
            backgroundColor: '#d4edda',
            color: '#155724',
            borderRadius: '4px'
          }}
        >
          <p><strong>Ticket enviado com sucesso!</strong></p>
          <p>Obrigado, {formData.nome}! Em breve entraremos em contato.</p>
        </div>
      )}
    </div>
  );
};

export default FormTicket;
