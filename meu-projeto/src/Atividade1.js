import { Link } from "react-router-dom";
import Letreiro from "./Letreiro";
import Relogio from './Relogio';

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