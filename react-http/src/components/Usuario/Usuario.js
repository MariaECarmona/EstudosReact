import React from "react";
import {IoIosCloseCircle} from 'react-icons/io';
import {FaUserCircle} from 'react-icons/fa';
import {BsDot} from 'react-icons/bs';

import './Usuario.css';

function Usuario(props){
    return (
        <div className="Usuario">
            <p className="iconeUsuario"><FaUserCircle/></p>
            <div>
                <p className="nomeUsuario">{props.usuario.nome} {props.usuario.sobrenome}</p>
                <p>{props.usuario.email} <BsDot/> ID: {props.usuario.id}</p>
            </div>
            <button onClick={props.removerUsuario}><IoIosCloseCircle/></button>
        </div>
    );
}

export default Usuario;