import React, { Component } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";

import './AdicionarUsuario.css';

class AdicionarUsuario extends Component{
    constructor(props){
        super(props);
        this.state = {
            usuario: { nome:'', sobrenome:'', email:'' }
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(event){
        const { name, value } = event.target;
        this.setState({usuario: {...this.state.usuario, [name]: value}});
    }

    onSubmitHandler(event){
        event.preventDefault();
        const id = Math.floor(Math.random() * 1000);
        const usuario = {...this.state.usuario, id};

        this.setState({usuario: {nome:'', sobrenome:'', email:''}});
        this.props.adicionarUsuario(usuario);
    }

    render(){
        return (
            <div className="AdicionarUsuario">
                <h2>Adicionar Usuário</h2>

                <form onSubmit={this.onSubmitHandler}>
                
                    <p> <AiOutlineUser/>
                        <input
                            type="text"
                            name="nome"
                            value={this.state.usuario.nome}
                            onChange={this.onChangeHandler}
                            placeholder="NOME"
                            required>
                        </input> 
                    </p>

                    <p> <AiOutlineUser/>
                        <input
                            type="text"
                            name="sobrenome"
                            value={this.state.usuario.sobrenome}
                            onChange={this.onChangeHandler}
                            placeholder="SOBRENOME"
                            required>
                        </input>
                    </p>

                    <p> <HiOutlineMail/>
                        <input
                            type="email"
                            name="email"
                            value={this.state.usuario.email}
                            onChange={this.onChangeHandler}
                            placeholder="EMAIL"
                            required>
                        </input>
                    </p>

                    <button type="submit">
                        Adicionar
                    </button>
                </form>
            </div>
        );
    }
}

export default AdicionarUsuario;