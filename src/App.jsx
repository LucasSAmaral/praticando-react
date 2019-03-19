import React from 'react';
import Title from './Title';
import Lista from './Lista';
import Button from './Button';
import Library from './Library';
import API from './API';
import './App.scss';

const b = ['Huguinho', 'Zezinho', 'Luisinho'];

const App = (props) => {
    return (
        
        <div className="container">
            <Title title="Lista Componentizada"></Title>
            <Lista/>
            <Title title="Lista vinda de um array"></Title>
            <ul>
                {b.map(i=>{
                    return <li key={i}>{i}</li>
                })}
            </ul>
            <Button cor="azul" texto="Botão 1"></Button>

            <Button cor="vermelho" texto="Botão 2"></Button>

            <Button cor="preto" texto="Botão 3"></Button>

            <Title title="Lista vinda de uma API com AXIOS"></Title>
            
            <API />

            <Title title="Lista vinda de um json"></Title>

            <Library/>
        </div>
        
    )
}

export default App