import React, { Component } from 'react';
import LibraryData from '../src/json/biblioteca1.json';

class Library extends Component {
    render() {
        return (
            <ul>
                {LibraryData.map((classes)=>{
                    return <li key={classes.class}>{`${classes.class}, ${classes.content}`}</li>
                })}
            </ul>
        )
    }
}

export default Library