import React, { Component } from 'react';
import Goal from '../components/Goal';
import Form from '../components/Form';
import '../App.css';
import { connect }from 'react-redux';
import {newGoal, endGoal} from '../actions/goalActions';

class GoalsContainer extends Component{
    state = {
        toggle: false,
        currentUser: '',
        type: ''
    };
    renderGoals = () => {
        return(
            <div className='goalContainer'>
            {this.renderGoalTable()}
            <button onClick={() => this.toggle()}>New Goal</button>
            {this.renderForm(['name'], this.handleSubmit)}
            </div>
        )
    }

    renderGoalTable = () =>{
        if(this.props.goals.length > 0){
            return(
            <table>
                    <h3>Goals</h3>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                    {this.props.goals.map((goal => <Goal user_id={this.props.user_id} goal={goal} complete={this.props.endGoal}/>))}
            </table>)
        }
        else
            return(<p>No Goals Yet Make Some!</p>)
    }

    componentDidMount(){
        const links = this.props.links
        this.props.renderLinks(links)
        this.setState({
            currentUser: this.props.user_id,
        })
    }

    
    handleSubmit = event => {
        event.preventDefault();
        this.props.newGoal(event.target.name.value, event.target.datetime.value, event.target.hidden.value)
        this.toggle()
    }

      
    toggle = () =>{
        let current = this.state.toggle
        this.setState({
            toggle: !current
        })
    }

    renderForm = (inp, func) =>{
        const formInputs = inp;
        if(this.state.toggle === true)
        return(<Form callBack={func} hasDateTime={true} inputs={formInputs} hasHidden={true} hiddenVal={this.props.user_id}/>)
        else
        return
    }

    render(){
        return(
            <>
            {this.renderGoals()}
            </>
        )
    }   
}

const mapStateToProps = state => {
    return({
      user: state.username,
      goals: state.goals,
      user_id: state.id
    })
  }
  const mapDispatchToProps = dispatch => {
    return{
        newGoal: (goalName, goalDate, id) => dispatch(newGoal(goalName, goalDate, id)),
        endGoal: (goal_id, user_id) => dispatch(endGoal(goal_id, user_id))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer)