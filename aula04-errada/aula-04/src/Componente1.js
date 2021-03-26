import React from "react";

export class Componente1 extends React.Component{

    state = {
        nome: 'Impacta',
        cursos: ['React', 'Angular', 'Vue.js']
    }

    render(){

        const { nome, cursos} = this.state

        return (
            <div>
            <h1>Meu primero componente do {nome}</h1>
            {cursos.map((curso, i) => (
                <lista />
            )
        )
    }
    </div>
        )}