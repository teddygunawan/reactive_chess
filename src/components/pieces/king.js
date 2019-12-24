import React from 'react';
class King extends React.Component {
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
                me king
            </div>
        )
    };
}


export default King;
