import React from "react";
import {IoIosCloseCircle} from 'react-icons/io';

import './Usuario.css';

function Usuario(props){
    return (
        <div className="Usuario">
            <ul>
                <li><strong>ID:</strong> {props.usuario.id}</li>
                <li><strong>Nome:</strong> {props.usuario.nome}</li>
                <li><strong>Email:</strong> {props.usuario.email}</li>
            </ul>
            <button onClick={props.removerUsuario}><IoIosCloseCircle/></button>
        </div>
    );
}

export default Usuario;