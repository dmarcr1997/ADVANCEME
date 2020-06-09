import React, { Component } from 'react'

class Skills extends Component{
    componentDidMount(){
        const links = ['home', 'new', 'train']
        this.props.renderLinks(links)
    }

    checkTrain = () => {
        if (this.props.train === true)
        return(<p>Training</p>)
        else
        return
    }
    
    render(){
        return(
            <div>
                <h3>Skills</h3>
                {this.checkTrain()}
            </div>
        )
    }   
}

export default Skills