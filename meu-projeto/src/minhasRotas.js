import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./Home";
import Atividade1 from "./Atividade1";
import Atividade2 from "./Atividade2";
import Atividade3 from "./Atividade3";
import Atividade4 from "./Atividade4";

export default function MinhasRotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Atividade1" element={<Atividade1 />} />
                <Route path="/Atividade2" element={<Atividade2 />} />
                <Route path="/Atividade3" element={<Atividade3 />} />
                <Route path="/Atividade4" element={<Atividade4 />} />
            </Routes>
        </BrowserRouter>
    );
}