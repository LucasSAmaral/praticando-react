import React from 'react';
import Title from './Title';
import Lista from './Lista';
import Button from './Button';
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
                    return <li>{i}</li>
                })}
            </ul>
            <Button cor="azul" texto="Botão 1"></Button>

            <Button cor="vermelho" texto="Botão 2"></Button>

            <Button cor="preto" texto="Botão 3"></Button>
        </div>
        
    )
}

export default App