import React from 'react';

function Relogio() {
    // Estado para armazenar o horário atual
    const [horario, setHorario] = React.useState(new Date());

    // Efeito colateral: Atualiza o horário a cada segundo
    React.useEffect(() => {
        const interval = setInterval(() => {
            setHorario(new Date()); // Atualiza o estado com a hora atual
        }, 1000); // Atualiza a cada 1000ms (1 segundo)

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(interval);
    }, []);

    // Função auxiliar para formatar o horário
    const formatarHorario = (data) => {
        const horas = data.getHours().toString().padStart(2, '0');
        const minutos = data.getMinutes().toString().padStart(2, '0');
        const segundos = data.getSeconds().toString().padStart(2, '0');
        return `${horas}:${minutos}:${segundos}`;
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Relógio Digital</h1>
            <h2>{formatarHorario(horario)}</h2>
        </div>
    );
}
export default Relogio;