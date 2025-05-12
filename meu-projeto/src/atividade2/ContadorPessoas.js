import { useState } from 'react';

function ContadorPessoas() {
  // controle do contador
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  // estilos
  const estilos = {
    aplicativo: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    },

    titulo: {
      fontSize: '24px',
      color: '#333',
      marginBottom: '20px',
    },

    contadorTotal: {
      marginBottom: '30px',
    },

    rotuloTotal: {
      fontSize: '20px',
      fontWeight: 'bold',
    },

    valorTotal: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#555',
    },

    contadorGenero: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '15px',
    },

    simboloGenero: {
      fontSize: '40px',
      marginRight: '10px',
    },

    rotuloGenero: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginRight: '5px',
    },

    valorGenero: {
      fontSize: '18px',
      fontWeight: 'bold',
    },

    botao: {
      padding: '5px 10px',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },

    botaoAdicionar: {
      marginLeft: '10px',
    },

    botaoRemover: {
      marginLeft: '5px',
      backgroundColor: '#f44336',
    }
  };

  // soma total
  const total = homens + mulheres;

  // incrementa e decrementa
  const adicionarHomem = () => setHomens(homens + 1);
  const removerHomem = () => homens > 0 && setHomens(homens - 1);
  
  const adicionarMulher = () => setMulheres(mulheres + 1);
  const removerMulher = () => mulheres > 0 && setMulheres(mulheres - 1);

  // reutilização do contadores de generos
  const ContadorGenero = ({ simbolo, label, contagem, cor, aoIncrementar, aoDecrementar }) => (
    <div style={estilos.contadorGenero}>
      <span style={{ ...estilos.simboloGenero, color: cor }} title={label}>
        {simbolo}
      </span>
      <span style={estilos.rotuloGenero}>{label}: </span>
      <span style={{ ...estilos.valorGenero, color: cor }}>{contagem}</span>
      <button 
        style={{ ...estilos.botao, ...estilos.botaoAdicionar, backgroundColor: cor }}
        onClick={aoIncrementar}
      >
        +
      </button>
      <button 
        style={{ ...estilos.botao, ...estilos.botaoRemover }}
        onClick={aoDecrementar}
      >
        -
      </button>
    </div>
  );

  return (
    <div style={estilos.aplicativo}>
      <h1 style={estilos.titulo}>Contador de Pessoas</h1>
      
      <div style={estilos.contadorTotal}>
        <span style={estilos.rotuloTotal}>Total: </span>
        <span style={estilos.valorTotal}>{total}</span>
      </div>

      <ContadorGenero
        simbolo="♂"
        label="Homens"
        contagem={homens}
        cor="#007bff"
        aoIncrementar={adicionarHomem}
        aoDecrementar={removerHomem}
      />

      <ContadorGenero
        simbolo="♀"
        label="Mulheres"
        contagem={mulheres}
        cor="#e83e8c"
        aoIncrementar={adicionarMulher}
        aoDecrementar={removerMulher}
      />
    </div>
  );
}

export default ContadorPessoas;