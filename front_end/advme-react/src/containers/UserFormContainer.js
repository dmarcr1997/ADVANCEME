//start here later
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from '../components/Form';
import {newUser, getUser} from '../actions/userActions';


class FormContainer extends Component{
    componentDidMount(){
        const links = ['login', 'signup']
        this.props.renderLinks(links)

    }
    handleSubmit = event => {
        event.preventDefault();
        let user={
            username: event.target.username.value,
            password_digest: event.target.password.value,        
        }
        
        switch(this.props.type){
            case 'login':
                this.props.login(user)
                break
            case 'signup':
                this.props.signup(user)
                break
            default:
                console.log(this.state)
        }
        setTimeout(() => {
            console.log(this.props.user_id)
            this.props.passBack(this.props.user, this.props.skills, this.props.goals)
        }, 1000)
      }

    
    render(){
        const inputs =['username', 'password'];
        return(
            <>
                <h3>{this.props.type}</h3>
                <Form callBack={this.handleSubmit} inputs={inputs} type={this.props.type} passBack={this.props.passBack}/>
            </>
        )
    }

}
const mapStateToProps = state => {
    return({
      user: state.username,
      skills: state.skills,
      goals: state.goals,
      user_id: state.id
    })
  }
  const mapDispatchToProps = dispatch => {
    return{
        login: userData => dispatch(getUser(userData)),
        signup: userData => dispatch(newUser(userData))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)