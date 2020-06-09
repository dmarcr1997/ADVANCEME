import React, { Component } from 'react'

class Goals extends Component{
    componentDidMount(){
        const links = ['home', 'skills', 'logout']
        this.props.renderLinks(links)
    }
    renderGoals(){

    }
    render(){
        return(
            <div><h3>Goals</h3></div>
        )
    }   
}

export default Goals