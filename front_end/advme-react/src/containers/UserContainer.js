import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
class UserContainer extends Component{
    componentDidMount(){
        const links = ['skills', 'goals', 'logout']
        this.props.renderLinks(links)
    }
    renderGoals = () => {
        return this.props.goals.map(goal =>{ 
            if(goal.ended === false){
            return(<div>{goal.name}<br/>{goal.level}<br/></div>)
            }
        })
            
    }
    renderSkills = () => {
        let displaySkills = []
        let sortedSkills = this.props.skills.sort((a, b) =>{ 
            if(a.lastTrain > b.lastTrain){
               return -1
           }
           else if(a.lastTrain < b.lastTrain){
               return 1
           }
           else
               return 0
           }
        )
        for(let i = 0; i < 5; i ++){
            if (sortedSkills[i])
            displaySkills.push(sortedSkills[i])
        }
        return displaySkills.map(skill => <div>{skill.name}<br/>{skill.level}<br/></div>)
    }
    render(){
        console.log(this.props.user)
        return(
            <div className='userPage'>
                <h3>Profile</h3>
                
                <p>
                    Name: {this.props.user}<br/>
                    Level: {this.props.userLevel}
                </p>

                <p>
                    Upcoming Goals:{this.renderGoals()}
                </p>

                <p>
                    Recent Training:{this.renderSkills()}
                </p>
            </div>
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