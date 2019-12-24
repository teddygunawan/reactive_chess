import React from 'react';
class Queen extends React.Component {
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
                me queen
            </div>
        )
    };
}


export default Queen;
