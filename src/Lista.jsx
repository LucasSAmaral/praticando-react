import React, { Component } from 'react';

const a = ['Lucas', 'Paulo', 'Rogério', 'Elizete', 'Boby'];

class Lista extends Component {
    render(){
        return(
            <ul>
                {a.map(i=>{
                    return <li>{i}</li>
                })}
            </ul>
        )
    }
}

export default Lista