import React, { Component } from 'react'

class Skills extends Component{
    componentDidMount(){
        const links = ['home', 'new', 'logout']
        this.props.renderLinks(links)
    }
    
    render(){
        return(
            <div>
                <h3>Skills</h3>
                {/* {this.props.skills.map((skill => <))} */}
            </div>
        )
    }   
}

export default Skills