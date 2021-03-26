import React, { useEffect, useState } from "react";
import { Lista } from "./Lista";

export const Componente2 = () => {
    console.log('Render Executando');
    const [teste, setTeste] = useState('Teste')
    const [cursos, setCursos] = useState([])

    const executa = () => {
        setTimeout(() => {
            setCursos(['.Net', 'Angular', 'Swift', 'Python'])
        }, 3000)
    }

    useEffect(() =>{
        console.log('Componente 2 - Effect foi disparado');
        const resultado = executa()
        return() =>{
            console.log('Componente 2 - Effect desmontado');
            return resultado
        }
    }, [])

    return (
        <div>
            <h1>Meu Segundo Componente do {teste}</h1>
            <input type="text" value={teste} onChange={evento => setTeste(evento.target.value) }/>
            <button type="button" onClick={e => setTeste('')} >Limpar</button>
            <h2 className="fonte">Meu Segundo Componente do React</h2>
            {cursos.map((curso, i) => (
                <Lista key={i} info={curso}/> // a key é importante para que cada elemento possua uma chave unica
            ))}
        </div>
    );
};