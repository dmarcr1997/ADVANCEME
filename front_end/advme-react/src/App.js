import React,{ Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';
import UserFormContainer from './containers/UserFormContainer.js';

class App extends Component{
  state = {
    loggedIn: false
  }

  handleLogin = () =>{
    this.setState({
      loggedIn: true
    })
    console.log('Logged In')
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route path='/login' render={(props) => <UserFormContainer {...props} type={'login'} loginCall={this.handleLogin}/> } />
          <Route path='/signup' render={(props) => <UserFormContainer {...props} type={'signup'} loginCall={this.handleLogin}/> } />
        </Router>
      </header>
    </div>
  );
  }
}

const mapStateToProps = state => {
  return({
    user: state.username
  })
}
export default connect(mapStateToProps)(App);
