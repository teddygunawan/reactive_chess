import React from 'react';
class Rook extends React.Component {
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
                me rook
            </div>
        )
    };
}


export default Rook;
