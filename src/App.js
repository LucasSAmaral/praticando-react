import React from 'react';
import Title from './Title';

const a = ['Lucas', 'Paulo', 'Rogério', 'Elizete', 'Boby'];

const App = (props) => {
    return (
        
        <div>
            <Title title="Teste"></Title>
            <ul>
                {a.map(i=>{
                    return <li>{i}</li>
                })}
            </ul>
        </div>
        
    )
}

export default App