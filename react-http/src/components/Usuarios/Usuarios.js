import React, { Component } from 'react';

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario';
import Usuario  from '../Usuario/Usuario';
import './Usuarios.css';


class Usuarios extends Component{
    constructor(props){
        super(props);
        this.state = {
            usuarios: []
        };

        this.adicionarUsuario = this.adicionarUsuario.bind(this);
    }

    adicionarUsuario(usuario){
        const usuarios = [...this.state.usuarios, usuarios];
        this.setState({ usuarios: usuarios })
    }

    removerUsuario(usuario) {
        if (window.confirm(`Tem certezaque seja remover "${usuario.nome} ${usuario.sobrenome}"`)){
            let usuarios = this.state.usuarios;
            usuarios = usuarios.filter(x => x.id !== usuario.id);
            this.setState({ usuarios: usuarios })
        }
    }

    componentDidMount(){
        fetch('https://reqres.in/api/users')
            .then(resposta => resposta.json())
            .then(dados => {
                const usuarios = dados.data.map(usuario =>({
                    id: usuario.id,
                    nome: usuario.first_name,
                    sobrenome: usuario.last_name,
                    email: usuario.email
                }));

                this.setState({usuarios});
            });
    }

    render(){
        return (
            <div className="divUsuarios">
                <AdicionarUsuario adicionarUsuario={this.adicionarUsuario}/>
                <div className="conteudoUsuarios">
                    {this.state.usuarios.map(usuario => (
                        <Usuario 
                            key={usuario.id}
                            usuario={usuario}
                            removerUsuario={this.removerUsuario.bind(this, usuario)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Usuarios;