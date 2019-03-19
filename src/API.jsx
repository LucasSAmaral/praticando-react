import React, { Component } from 'react';
import axios from 'axios';

class API extends Component {

    constructor() {
        super();
        this.state = {
            planets: [],
            qtdFilms: 0
        }
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/planets/1/')
            .then(response => {
                this.setState({ planets: response.data, qtdFilms: response.data.films.length })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    renderPlanets() {
        return (
            <div>
                <p>Nome: {this.state.planets.name}</p>
                <p>Clima: {this.state.planets.climate}</p>
                <p>Terreno: {this.state.planets.terrain}</p>
                <p>População: {this.state.planets.population}</p>
                <p>{this.state.qtdFilms === 0 ? 'Este planeta não apareceu em nenhum filme' : this.state.qtdFilms === 1 ? `Este planeta aparece em ${this.state.qtdFilms} filme` : this.state.qtdFilms > 1 ? `Este planeta aparece em ${this.state.qtdFilms} filmes` : ''}</p>
            </div>
        )

    }

    render() {
        return this.renderPlanets()
    }
}

export default API