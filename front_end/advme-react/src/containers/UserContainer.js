import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserContainer extends Component{
    componentDidMount(){
        const links = ['skills', 'goals', 'logout']
        this.props.renderLinks(links)
    }
    render(){
        console.log(this.props.user)
        return(
            <>
                <h3>Profile</h3>
                
                <p>
                    Name: {this.props.user}<br></br>
                    Level: {this.props.userLevel}
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
        userLevel: state.userLevel,
        skills: state.skills,
        goals: state.goals
    })
}

export default connect(mapStateToProps)(UserContainer)