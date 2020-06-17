import React,{ Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import SkillsGoalsContainer from './containers/SkillsGoalsContainer';
import UserFormContainer from './containers/UserFormContainer.js';
import UserContainer from './containers/UserContainer';
import NavBar from './components/NavBar';
import Logout from './components/Logout';
import SpinnerPage from './components/SpinnerPage';
import Animation from './components/Animation';
import Animation2 from './components/Animation2';
import Animation3 from './components/Animation3';
import Animation4 from './components/Animation4';
import {logout, checkLogin, setLoading} from './actions/userActions';

class App extends Component{
  state={
    links: [],
    type: 1
  }

  redirectToProfile = () => {
    while(this.props.loading === true){
      return(
        <Redirect to='/loading' />
      )
    }
    if (this.props.loggedIn === true)
      return(
        <Redirect to='/home' />
      )
    else if(this.props.loading === false && this.props.loggedIn === false)
        return(
          <Redirect to='/login' />
      )
  }

  renderNavBar = () => {
    return(
        <div>
            <NavBar links = {this.state.links}/>
        </div>
    )
  } 
  
  addLinks = (navLinks) => {
    this.setState({
      ...this.state,
      links: navLinks
    })
    return console.log('New Links')
  }
 
  componentDidMount(){
    this.props.setLoading()
    this.props.checkLogin()
    setTimeout(() => {
      console.log('done loading')
    }, 4000)
    window.addEventListener('keypress', this.handleKey)
  }


  handleKey = (event) => {
    if(event.key === "w"){
      this.setState({
        ...this.state,
        type: 2
      })
    }
    else if(event.key === "s"){
      this.setState({
        ...this.state,
        type: 1
      })
    }
    else if(event.key === "a"){
      this.setState({
        ...this.state,
        type: 3
      })
    }
    else if(event.key === "d"){
      this.setState({
        ...this.state,
        type: 4
      })
    }
    console.log(this.state)
  }

  renderAnimation = () => {
    if (this.state.type === 1) return <Animation />
    else if (this.state.type === 2) return <Animation2 />
    else if (this.state.type === 3) return <Animation3 />
    else if (this.state.type === 4) return <Animation4 />
    return
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h1>ADVANCEME</h1>
      {/* <div>{this.renderAnimation()}<br/></div> */}
      <div className="ContentBox1">
      <div className="ContentBox2">
        <Router>
          {this.renderNavBar()}
          {this.redirectToProfile()}
          <Route path='/login' exact render={(props) => <UserFormContainer {...props} type={'login'} renderLinks={this.addLinks}/> } />
          <Route path='/signup' exact render={(props) => <UserFormContainer {...props} type={'signup'} renderLinks={this.addLinks}/> } />
          <Route path='/home' render={(props) => <UserContainer {...props} renderLinks={this.addLinks}/>} />
          <Route path='/skills' render={(props) => <SkillsGoalsContainer {...props} links={['home', 'goals', 'logout']} type='skills' renderLinks={this.addLinks}/>} />
          <Route path='/goals' render={(props) => <SkillsGoalsContainer {...props} links={['home', 'skills', 'logout']} type='goals' renderLinks={this.addLinks}/>} />
          <Route path='/logout' render={(props) => <Logout {...props} userLogout={this.props.logout}/> } />
          <Route path='/loading'render={(props) => <SpinnerPage {...props} renderLinks={this.addLinks}/>} />
        </Router>
        </div>
        </div>
      </header>
    </div>
  );
  }
}

const mapStateToProps = state => {
  return({
    user: state.username,
    userLevel: state.userLevel,
    skills: state.skills,
    goals: state.goals,
    user_id: state.id,
    loggedIn: state.loggedIn, 
    error: state.error,
    loading: state.loading
  })
}
const mapDispatchToProps = dispatch => {
  return{
      logout: () => dispatch(logout()),
      checkLogin: () => dispatch(checkLogin()),
      setLoading: () => dispatch(setLoading())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
