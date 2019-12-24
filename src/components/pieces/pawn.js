import React from 'react';
class Pawn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        };
        this.initializePieces()
    }
    render() {
        return (
            <div>
                me pawn
            </div>
        )
    };
}


export default Pawn;
