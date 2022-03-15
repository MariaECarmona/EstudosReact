import React, { useState, useEffect } from 'react';

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario';
import Usuario  from '../Usuario/Usuario';

import './Usuarios.css';


function Usuarios(){

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(resposta => resposta.json())
            .then(dados => {
                const usuarios = dados.data.map(usuario =>({
                    id: usuario.id,
                    nome: usuario.first_name,
                    sobrenome: usuario.last_name,
                    email: usuario.email
                }));

                setUsuarios(usuarios);
            });
    }, []);

    const adicionarUsuario = usuario => {
        setUsuarios(usuariosAtuais => [...usuariosAtuais, usuario]);
    }

    const removerUsuario = usuario => {
        if (window.confirm(`Tem certezaque seja remover "${usuario.nome} ${usuario.sobrenome}"`)){
            
            fetch(`https://reqres.in/api/users/${usuario.id}`, {
                method: 'DELETE'
            })
                .then(resposta => {
                    if(resposta.ok){
                        setUsuarios(usuarios.filter(x => x.id !== usuario.id));
                    }
                })
        }
    }

    return (
        <div className="divUsuarios">
            <AdicionarUsuario adicionarUsuario={adicionarUsuario}/>
            <div className="conteudoUsuarios">
                {usuarios.map(usuario => (
                    <Usuario 
                        key={usuario.id}
                        usuario={usuario}
                        removerUsuario={() => removerUsuario(usuario)}
                    />
                ))}
            </div>
        </div>
    );
    
}

export default Usuarios;