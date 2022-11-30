import React from "react";
import IF from './if'

export default props => {
    const usuario = props.usuario || {}
    
    return (
        <div>
               <IF test= {usuario && usuario.nome}>
             Seja Bem vindo<strong> { props.usuario.nome}</strong>
            </IF>

            <IF test= {!usuario && !usuario.nome}>
             Seja Bem vindo<strong> { props.usuario.nome}</strong>
            </IF>
        </div>
    )
}