import React, { Component } from 'react';

export default class PTA_Event_Form4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'gegge'
        };
    }
    
    handleSetName = () => {
        console.log(this.props);
        alert(this.props.name);
        this.setState({
            name: 'Phan Truong Anh'
        });
    };

    render() {
        return (
            <div>
                <h2>Lay data tu props</h2>
                <button onClick={this.handleSetName}>Get Name</button>
                <h3>Welcome to {this.state.name}</h3>
            </div>
        );
    }
}
