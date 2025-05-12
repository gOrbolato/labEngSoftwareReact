import { Link } from "react-router-dom";
import Letreiro from "./atividade1/Letreiro";
import Relogio from './atividade1/Relogio';

export default function Atividade1() {
    return(
        <>
            <h2>Semana 1</h2>
            <Letreiro/>
            <Relogio/>
            
            <Link to="/">Voltar</Link>
        </>
    );
}