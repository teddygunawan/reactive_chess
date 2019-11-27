import React from 'react';
import Game from '../game/game.js';

/* Controls the game state */
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameState: ""
        };
    }
    render() {
        switch (this.state.gameState) {
            case "home":
                break;
            case "login":
                break;
            case "register":
                break;
            default:
                return (<Game />);
        }
    };
}


export default Main;
