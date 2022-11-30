import './App.css'
import React from "react";

import TabelaProdutos from './components/repeticao/TabelaProdutos';
import listaAlunos from './components/repeticao/listaAlunos';
import FamiliaMembro from './components/básicos/FamiliaMembro';
import Familia from './components/básicos/Familia';
import Card from "./components/layout/Card";
import Aleatorio from "./components/básicos/Aleatorio";
import Primeiro from './components/básicos/Primeiro'
import ComParametro from './components/básicos/ComParametro'
import Fragmento from './components/básicos/Fragmento'


export default () => (
    <div className='app'>
        <h1>Fundamentos React</h1>

        <div className="Cards">

        <Card titulo="#07 - Desafio Repetição " color="#329AD9">
        <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#06 - Repetição " color="#00C8F8">
        <listaAlunos></listaAlunos>
        </Card>

        <Card titulo="#05 - Componente Com Filhos" color="#00C8F8">
            <Familia sobrenome = "Souza">
                <FamiliaMembro nome = "Pedro"  />
                <FamiliaMembro nome = "Ana"  />
                <FamiliaMembro nome = "Leandro" />
             </Familia>
        </Card>

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