import React, { Component } from 'react'

export default class Pta_ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "Anh",
            lastName: "Phan",
            userName: 'k22cnt4'
        }
    }

    Member = (props) => {
        return (
            <div className='alert alert-success'>
                <h3>xin chao {props.fullName} - Ban đã {props.age}</h3>
            </div>
        )
    }

    ListMember = (props) => {
        return (
            <>
                <this.Member fullName='Phan Truong Anh' age='20'/>
                <this.Member fullName='Fanta' age='22'/>
                <this.Member fullName='nothing' age='20'/>
            </>
        )
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Class Component</h2>
                <hr/>
                <h3>data in state</h3>
                <h4>xin chao {this.state.lastName} {this.state.firstName} {this.state.userName}</h4>
                <hr/>
                <h3>data from props</h3>
                <h4>xin chao {this.props.lastName} {this.props.name}</h4>
                <this.Member fullName='Phan Truong Anh' age='20'/>
                <this.ListMember/>

            </div>
           

        )
    }
}
