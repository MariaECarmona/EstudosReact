import './App.css';
import { Component } from 'react';

import Comentario from './components/Comentario';

class App extends Component{

  state = {
    comentarios: [
      {
        nome: "João",
        email: "joao@mail.com",
        data: new Date(2022, 3, 10),
        mensagem: "Olá, tudo bem?"
      },

      {
        nome: "Maria",
        email: "maria@mail.com",
        data: new Date(2022, 3, 10),
        mensagem: "Tudo sim!"
      }
    ],
    novoComentario: {
      nome: "",
        email: "",
        mensagem: ""
    }
    
  }

  adicionarComentario = evento => {
    evento.preventDefault();

    const novoComentario = {...this.state.novoComentario, data: new Date()}

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: {nome:'', email:'', mensagem:''}
    });
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;

    lista = lista.filter(c => c != comentario);

    this.setState({comentarios : lista})
  }

  digitacao = evento => {
    const {name, value} = evento.target;
    
    this.setState({novoComentario: {...this.state.novoComentario, [name]: value}})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Meu projeto</h1>
        </header>
        {this.state.comentarios.map((comentario, indice) => (
          <Comentario 
            key={indice}
            nome={comentario.nome} 
            email={comentario.email} 
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}>

            {comentario.mensagem}

          </Comentario>

        ))}

      <form method="post" onSubmit={this.adicionarComentario}>
          <h2>Adicionar Comentários</h2>
          <div>
            <input 
              type="text" 
              value={this.state.novoComentario.nome}
              onChange={this.digitacao}
              name="nome" 
              placeholder="Digite seu nome"/>
          </div>

          <div>
            <input 
              type="text" 
              value={this.state.novoComentario.email}
              onChange={this.digitacao}
              name="email" 
              placeholder="Digite seu email"/>
          </div> 

          <div>
            <textarea 
              name="mensagem"
              value={this.state.novoComentario.mensagem}
              onChange={this.digitacao}
              rows="4">
            </textarea>
          </div>
          
          <button type="submit">Comentar</button>

      </form>
      </div>
    );
  }
}


export default App;
