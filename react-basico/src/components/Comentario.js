import React from "react";
import {FaUserCircle} from 'react-icons/fa';
import {IoIosCloseCircle} from 'react-icons/io';
import {BsDot} from 'react-icons/bs';

//CSS
import './Comentario.css'

const Comentario = props => {
    const estilo = {
        color: "red",
        padding: '10px',
        fontSize: '30px'
    }

    return (<div className="Comentario">
                <p className="iconeUsuario"><FaUserCircle/></p>
                <div className="conteudoComentario">
                    <h2 className="nome">{props.nome}  <span className="email"> <BsDot/> {props.email}</span> </h2>
                    
                    <p className="mensagem">{props.children}</p>
                    <p className="data">{props.data.toString()}</p>
                </div>
                <button onClick={props.onRemove}><IoIosCloseCircle/></button>
            </div>);

}
    

export default Comentario;