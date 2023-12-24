import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        return <h1> Name {this.props.name} a.k.a {this.props.rohitName}</h1>
    }
}
export default Welcome