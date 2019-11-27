import React from 'react';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                player: '',
                row: '',
                col: '',
                step: 0
            }],
            gameState: "home"
        };
    }
    render() {
        return (
            <div>hello!</div>
        )
    };
}


export default Game;
