import React, { Component } from 'react';

const a = ['Lucas', 'Paulo', 'Rogério', 'Elizete', 'Boby'];

class Lista extends Component {
    render(){
        return(
            <ul>
                {a.map(i=>{
                    return <li key={i}>{i}</li>
                })}
            </ul>
        )
    }
}

export default Lista