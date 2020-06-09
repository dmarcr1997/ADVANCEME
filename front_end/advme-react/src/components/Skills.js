import React, { Component } from 'react'
import Skill from './Skill';
import Form from './Form';
import { connect }from 'react-redux';
import {newSkill, increaseSkill} from '../actions/skillActions';
class Skills extends Component{
    state = {
        toggle: false
    };
    
    componentDidMount(){
        const links = ['home', 'goals', 'logout']
        this.props.renderLinks(links)

    }
    handleSubmit = event => {
        console.log(event.target)
    }
    toggle = () =>{
        let current = this.state.toggle
        this.setState({
            toggle: !current
        })
    }
    
    renderForm = () =>{
        const formInputs = ['name'];
        if(this.state.toggle === true)
        return(<Form callBack={this.handleSubmit} inputs={formInputs} />)
        else
        return
    }
    render(){
        return(
            <div>
                <h3>Skills</h3>
                {this.props.skills.map((skill => <Skill skill={skill}/>))}
                <button onClick={() => this.toggle()}>New Skill</button>
                {this.renderForm()}
            </div>
        )
    }   
}

const mapStateToProps = state => {
    return({
      user: state.username,
      skills: state.skills,
      user_id: state.id
    })
  }
  const mapDispatchToProps = dispatch => {
    return{
        newSkill: skillData => dispatch(newSkill(skillData)),
        increaseSkill: skillData => dispatch(increaseSkill(skillData))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Skills)