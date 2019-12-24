import React from 'react';
import Player from '../player/player.js';
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
            history: [],
            gameState: "home"
        };

    }
    render() {
        switch (this.state.gameState) {
            case 'login':
                break
            default:

        }
        return (
            <div className="game-container">
                <div><Player name="Ted" /></div>
                <div><Player name="Di" /></div>
            </div>
        )
    };
}


export default Game;
