import React from 'react';
import Title from './Title';
import Lista from './Lista';
import './App.scss';

const b = ['Huguinhho', 'Zezinho', 'Luisinho'];

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
        </div>
        
    )
}

export default App