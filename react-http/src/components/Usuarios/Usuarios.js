import React, { Component } from 'react';

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario';
import Usuario  from '../Usuario/Usuario';
import './Usuarios.css';


class Usuarios extends Component{
    constructor(props){
        super(props);
        this.state = {
            usuarios: [
                { id: 1, nome: 'João', sobrenome: 'Silva', email: 'joao@mail.com' },
                { id: 2, nome: 'Maria', sobrenome: 'Santos', email: 'maria@mail.com' }
            ]
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