import React, { useState} from "react";
import indiretaFilho from './IndiretaFilho'

export default props => {
    const [a, b ] = [1, 2]
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformações (nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
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