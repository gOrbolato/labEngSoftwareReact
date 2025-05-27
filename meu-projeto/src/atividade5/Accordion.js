import React, { useState } from 'react';

const AccordionItem = ({ titulo, conteudo, isOpen, onClick }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <div
        onClick={onClick}
        style={{
          backgroundColor: '#f1f1f1',
          padding: '12px 20px',
          cursor: 'pointer',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      >
        <strong>{titulo}</strong>
      </div>
      {isOpen && (
        <div
          style={{
            padding: '15px 20px',
            border: '1px solid #ccc',
            borderTop: 'none',
            borderRadius: '0 0 4px 4px',
            backgroundColor: '#fff'
          }}
        >
          <p style={{ margin: 0 }}>{conteudo}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const itens = [
    {
      titulo: 'Detalhes do Produto',
      conteudo: 'Aqui estão alguns detalhes sobre o produto, como características, benefícios e outras informações relevantes.'
    },
    {
      titulo: 'Especificações Técnicas',
      conteudo: 'Detalhes técnicos do produto: dimensões, materiais, cores disponíveis e demais especificações.'
    },
    {
      titulo: 'Comentários dos Usuários',
      conteudo: 'Veja o que nossos clientes têm a dizer sobre o produto: feedback, avaliações e depoimentos.'
    }
  ];

  const [indiceAtivo, setIndiceAtivo] = useState(null);

  const toggleItem = (index) => {
    setIndiceAtivo(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {itens.map((item, index) => (
        <AccordionItem
          key={index}
          titulo={item.titulo}
          conteudo={item.conteudo}
          isOpen={indiceAtivo === index}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
