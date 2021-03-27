// Componente de classe

import React from "react";
import { Lista } from "./Lista";

export class Component1 extends React.Component {
  constructor(props) {
    super(props);

    this.setText = this.setText.bind(this); // essa expressao "sincroniza" o this da funcao, com o do modulo (isso é o bind)
  }

  state = {
    nome: "",
    cursos: [],
  };

  //componentWillMount(){
  //    console.log('Antes do componente montar');
  //}

  componentDidMount() {
    console.log("Componente 1 - Depois do componente montar");
    setTimeout(() => {
      this.setState({ cursos: ["React", "Angular", "Vue.js"] });
    }, 3000);
  }

  //componentWillUpdate(){
  //    console.log('Componente 1 - Antes do componente atualizar');
  //}

  componentDidUpdate() {
    console.log("Componente 1 - Depois do componente atualizar");
  }

  componentWillUnmount() {
    console.log("Componente 1 - Componente desmontou");
  }

  setText(evento) {
    this.setState({ nome: evento.target.value });
  }

  render() {
    console.log("Componente 1 - Render executando", this.state);
    var estilos = {
      fontSize: 50,
      color: "#FF0000",
    };

    const { nome, cursos } = this.state;

    return (
      <div>
        <h1 style={estilos}>Meu primeiro componente do {nome}</h1>
        <input type="text" value={nome} onChange={this.setText} />
        <button type="button" onClick={(e) => this.setState({ nome: "" })}>
          Limpar
        </button>
        {cursos.map((curso, i) => (
          <Lista key={i} info={curso} /> // a key é importante para que cada elemento possua uma chave unica
        ))}
      </div>
    );
  }
}
