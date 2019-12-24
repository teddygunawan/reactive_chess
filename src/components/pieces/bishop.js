import React from 'react';
class Bishop extends React.Component {
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
                me bishop
            </div>
        )
    };
}


export default Bishop;
