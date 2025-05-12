import { Link } from 'react-router-dom';
import ContadorPessoas from './atividade2/ContadorPessoas';

export default function Atividade1() {
    return(
        <>
            <h2>Semana 2</h2>
            <ContadorPessoas/>
            
            <Link to="/">Voltar</Link>
        </>
    );
}