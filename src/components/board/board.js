import React from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: [
                
            ]
        };
    }
    render() {
        return (
            <div>
                <div><Player name="Ted" /></div>
                <div><Player name="Di" /></div>
            </div>
        )
    };
}


export default Board;
