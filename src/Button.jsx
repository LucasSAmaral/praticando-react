import React, { Component } from 'react';

class Button extends Component {
    render(){
        return(
            <button className={`btn ${this.props.cor}`}>{this.props.texto}</button>
        )
    }
}

export default Button