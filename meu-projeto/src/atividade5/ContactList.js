import React from 'react';

const ContactList = ({ contacts, selectedContact, onSelectContact }) => {
  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {contacts.map((contact) => (
          <li key={contact.email} style={{ marginBottom: '10px' }}>
            <button
              onClick={() => onSelectContact(contact)}
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: selectedContact.email === contact.email ? '#17a2b8' : '#fff',
                color: selectedContact.email === contact.email ? '#fff' : '#333',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
