import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";

import './AdicionarUsuario.css';

const INITIAL_STATE = {
    usuario: { nome:'', sobrenome:'', email:'' }
};

function AdicionarUsuario(props){
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    
    const onChangeHandler = event => {
        const { name, value } = event.target;
        this.setState({usuario: {...this.state.usuario, [name]: value}});
    };

    const onSubmitHandler = event => {
        event.preventDefault();

        const usuario = {nome, sobrenome, email};

        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(usuario)
        })
            .then(resposta => resposta.json())
            .then(dados => {
                setNome('');
                setSobrenome('');
                setEmail('');

                props.adicionarUsuario(dados);
            });

        
    };

    return (
        <div className="AdicionarUsuario">
            <h2>Adicionar Usuário</h2>

            <form onSubmit={onSubmitHandler}>
            
                <p> <AiOutlineUser/>
                    <input
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={event => setNome(event.target.value)}
                        placeholder="NOME"
                        required>
                    </input> 
                </p>

                <p> <AiOutlineUser/>
                    <input
                        type="text"
                        name="sobrenome"
                        value={sobrenome}
                        onChange={event => setSobrenome(event.target.value)}
                        placeholder="SOBRENOME"
                        required>
                    </input>
                </p>

                <p> <HiOutlineMail/>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
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

export default AdicionarUsuario;