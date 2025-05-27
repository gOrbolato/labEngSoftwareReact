// App.js
import React, { useState } from 'react';
import FormQuiz from './atividade5/FormQuiz';
import FormTicket from './atividade5/FormTicket';
import Accordion from './atividade5/Accordion';
import ContactList from './atividade5/ContactList';
import Chat from './atividade5/Chat';

const App = () => {
  // Definindo alguns contatos de exemplo
  const contacts = [
    { name: 'Carlos', email: 'carlos@mail.com' },
    { name: 'Mariana', email: 'mariana@mail.com' },
    { name: 'Roberto', email: 'roberto@mail.com' }
  ];

  // Estado que guarda o contato selecionado
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9'
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        Aplicativo de Exemplo - Gerenciamento de Estado
      </h1>
      
      <section
        style={{
          margin: '20px 0',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        <h2>Formulário de Quiz</h2>
        <FormQuiz />
      </section>

      <section
        style={{
          margin: '20px 0',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        <h2>Formulário de Ticket</h2>
        <FormTicket />
      </section>

      <section
        style={{
          margin: '20px 0',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        <h2>Acordeão</h2>
        <Accordion />
      </section>

      <section style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
        <div
          style={{
            flex: '1',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h2>Lista de Contatos</h2>
          <ContactList
            contacts={contacts}
            selectedContact={selectedContact}
            onSelectContact={handleSelectContact}
          />
        </div>
        <div
          style={{
            flex: '2',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h2>Chat</h2>
          {selectedContact && (
            // Usando a propriedade key para forçar a reinicialização do estado do Chat ao trocar de contato
            <Chat key={selectedContact.email} contact={selectedContact} />
          )}
        </div>
      </section>
    </div>
  );
};

export default App;
