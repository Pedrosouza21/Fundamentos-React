import React from "react";
import indiretaFilho from './IndiretaFilho'

export default props => {
 
    let nome = '?'
    let idade = 0 
    let nerd = false
    function fornecerInformações (nome, idade, nerd) {
       nome = nomeParam
       idade = idadeParam
       nerd = nerdParam

    }

    return (
        <div> 
            <div>
                <span>{nome}</span>
                <span>{idade} <strong>  </strong></span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
               
        </div>
        <indiretaFilho quandoClicar= {fornecerInformações}></indiretaFilho>
    </div>
    )
}