import React, { Component } from 'react';

class Library extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: [],
            error: null
        };
    }

    componentDidMount() {
        fetch('../src/json/biblioteca1.json')
            .then(response => response.json())
            .then(data => this.setState({classes: data.classes}))
            .catch(error => this.setState({error}));
    }

    render() {
        const {classes} = this.state;
        console.log('state', this.state);
        return(
            <ul>
                {classes.map((classe) =>{
                    return <li key={classe.class}>{classe.class}</li>
                })}
            </ul>
        )
    }
}

export default Library