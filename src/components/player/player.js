import React from 'react';
import { Pawn, Knight, Rook, Bishop, King, Queen } from '../pieces'
class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            pieces: []
        };
        this.initializePieces()
    }
    initializePieces() {
        this.state.pieces =
            [{
                piece: <Rook />,
                col: 0,
                row: 0
            }]

    }
    render() {
        let element = null;
        console.log(this.state.pieces)
        this.state.pieces.forEach((piece) => {
            element += <input type="button" className="pieces" value="rook" />
        });
        return (
            <div>
                {element}
            </div>
        )
    };
}


export default Player;
