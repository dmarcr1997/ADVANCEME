//start here later
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from '../components/Form';
import {newUser, getUser} from '../actions/userActions';

class FormContainer extends Component{
    state = {
        username: '',
        password: '',
    }
    handleSubmit = event => {
        event.preventDefault();
    
        let user={
            username: event.target.username.value,
            password_digest: event.target.password.value,        
        }
        
        switch(this.props.type){
            case 'login':
                this.props.login(user, this.props.loginCall())
                this.props.loginCall()
                break
            case 'signup':
                this.props.signup(user, this.props.loginCall())
                this.props.loginCall()
                break
            default:
                console.log(this.state)
        }
        
        this.setState({
            username:'',
            password:''
        })
        
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render(){
        const inputs =['username', 'password'];
        return(
            <>
                <h1>ADVANCEME</h1>
                <h3>{this.props.type}</h3>
                <Form callBack={this.handleSubmit} handleChange={this.handleChange} inputs={inputs} type={this.props.type} loginCall={this.props.login}/>
            </>
        )
    }

    }

    const mapDispatchToProps = dispatch => {
        return{
            login: userData => dispatch(getUser(userData)),
            signup: userData => dispatch(newUser(userData))
        }
}

export default connect(null, mapDispatchToProps)(FormContainer)