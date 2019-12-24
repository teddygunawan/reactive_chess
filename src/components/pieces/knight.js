import React from 'react';
class Knight extends React.Component {
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
                me knight
            </div>
        )
    };
}


export default Knight;
