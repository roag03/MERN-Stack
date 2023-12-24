import React, { Component } from 'react'


class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'HARE KRISHNA SABHI KO'
        }
    }
    render(){
        return (
            <div>
        <h1>
            {this.state.message}
            </h1>
            <button>Aapka Swagat Hai</button>
            </div>
        )
    }
}
export default Message