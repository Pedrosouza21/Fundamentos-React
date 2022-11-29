import './App.css'
import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/básicos/Aleatorio";
import Primeiro from './components/básicos/Primeiro'
import ComParametro from './components/básicos/ComParametro'
import Fragmento from './components/básicos/Fragmento'


export default () => (
    <div className='app'>
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#04 - Desafio Aleatório">
                <Aleatorio min={1} max={60} />
            </Card>


            <Card titulo=" #03 -Fragmento">
                <Fragmento />
            </Card>


            <Card titulo="#02 - Com Parâmetro">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={9.3}
                />
            </Card>


            <Card titulo=" #01 - Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>


          
        </div>
    </div>
)