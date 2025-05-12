import { Link } from "react-router-dom";
import Gallery from "./atividade3/Gallery";
import PackingList from "./atividade3/PackingList";
import ScientristList from "./atividade3/ScientristList";


export default function Atividade3() {
    return (
        <>
            <h2>Semana 3</h2>
            <Gallery />
            <PackingList />
            <ScientristList />

            <Link to="/">Voltar</Link>
        </>
    );
}