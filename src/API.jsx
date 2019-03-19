import React, { Component } from 'react';
import axios from 'axios';

class API extends Component {

    constructor(){
        super();
        this.state = {
            planets: []
        }
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/planets/3/')
        .then(response => {
            this.setState({planets: response.data})
        })
        .catch(function(error){
            console.log(error);
        })
    }

    renderPlanets(){
            return(
                <div>
                    <p>Nome: {this.state.planets.name}</p>
                    <p>Clima: {this.state.planets.climate}</p>
                    <p>Terreno: {this.state.planets.terrain}</p>
                    <p>População: {this.state.planets.population}</p>
                </div>
            )
        
    }

    render(){
        return this.renderPlanets()
    }
}

export default API