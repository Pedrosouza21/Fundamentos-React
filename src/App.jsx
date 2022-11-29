import React from "react";

import Aleatorio from "./components/básicos/Aleatorio";
import Primeiro from './components/básicos/Primeiro'
import ComParametro from './components/básicos/ComParametro'
import Fragmento from './components/básicos/Fragmento'


export default  () => (

        <div id="app">
        <h1>Fundamentos React</h1> 
        <Aleatorio min={10} max={60} />
        <Fragmento />
        <ComParametro 
            titulo="Situação do Aluno"
            aluno="Pedro"
            nota={9.3}
        />

        <Primeiro></Primeiro>
         </div>
    )