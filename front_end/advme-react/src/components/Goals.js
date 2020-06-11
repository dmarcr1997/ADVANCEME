import React, { Component } from 'react'

class Goals extends Component{
    state = {
        toggle: false,
        currentUser: ''
    };
    
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

//start here similar to skills page then move on to individual skill and goal functions
//add learndate to skills table