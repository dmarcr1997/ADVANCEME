import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserContainer extends Component{
    componentDidMount(){
        const links = ['skills', 'goals', 'train']
        this.props.renderLinks(links)
    }
    render(){
        return(
            <>
                <h3>Profile</h3>
                
                <ul>
                </ul>
                <p>
                    Name: {this.props.user}
                </p>

                <p>
                    Upcoming Goals: {this.props.goals.map(goal => <ul><li>{goal.name}</li><li>{goal.level}</li></ul>)}
                </p>

                <p>
                    Recent Training: {this.props.skills.map(skill => <ul><li>{skill.name}</li><li>{skill.level}</li></ul>)}
                </p>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return({
        user: state.username,
        skills: state.skills,
        goals: state.goals
    })
}

export default connect(mapStateToProps)(UserContainer)