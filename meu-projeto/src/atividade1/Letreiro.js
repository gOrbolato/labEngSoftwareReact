import React, { useState, useEffect } from 'react';

function Letreiro() {
    const [texto, setTexto] = useState(""); // inicio vazio
    const frase = "Não sei o que escrever aqui!"; // frase

    // digitacao
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < frase.length) {
                setTexto(frase.slice(0, index + 1)); // atualiza frase slice
                index++;
            } else {
                clearInterval(interval); // intervalo finalizar
            }
        }, 150);

        return () => clearInterval(interval); // limpa o intervalo
    }, []);

    // cores
    const cores = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

    return (
        <div style={{
            display: "flex",
            justifyContent: "center", 
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#f0f0f0"
        }}>
            {/* Renderiza cada letra com uma cor diferente */}
            <div>
                {Array.from(texto).map((letra, i) => (
                    <span key={i} style={{ color: cores[i % cores.length], fontSize: "3rem" }}>
                        {letra}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Letreiro;