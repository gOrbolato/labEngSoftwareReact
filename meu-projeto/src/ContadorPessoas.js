import { useState } from 'react';
import './ContadorPessoas.css'; // Arquivo CSS separado para estilos

function ContadorPessoas() {
  // Estados para controlar as contagens
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  // Função para calcular o total
  const total = homens + mulheres;

  // Funções para incrementar e decrementar
  const adicionarHomem = () => setHomens(homens + 1);
  const removerHomem = () => homens > 0 && setHomens(homens - 1);
  
  const adicionarMulher = () => setMulheres(mulheres + 1);
  const removerMulher = () => mulheres > 0 && setMulheres(mulheres - 1);

  // Componente reutilizável para os contadores de gênero
  const ContadorGenero = ({ simbolo, label, contagem, cor, aoIncrementar, aoDecrementar }) => (
    <div className="contador-genero">
      <span className="simbolo-genero" style={{ color: cor }} title={label}>
        {simbolo}
      </span>
      <span className="rotulo-genero">{label}: </span>
      <span className="valor-genero" style={{ color: cor }}>{contagem}</span>
      <button 
        className="botao-adicionar" 
        style={{ backgroundColor: cor }}
        onClick={aoIncrementar}
      >
        +
      </button>
      <button 
        className="botao-remover" 
        onClick={aoDecrementar}
      >
        -
      </button>
    </div>
  );

  return (
    <div className="aplicativo">
      <h1 className="titulo">Contador de Pessoas</h1>
      
      <div className="contador-total">
        <span className="rotulo-total">Total: </span>
        <span className="valor-total">{total}</span>
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