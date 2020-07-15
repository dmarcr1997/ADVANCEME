import React,{ Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import AnimationContainer from './containers/AnimationContainer'
import GoalsContainer from './containers/GoalsContainer';
import SkillsContainer from './containers/SkillsContainer';
import UserFormContainer from './containers/UserFormContainer.js';
import UserContainer from './containers/UserContainer';
import Logout from './components/Logout';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import {setType} from './actions/animationActions';
import {logout, checkLogin, setLoading} from './actions/userActions';
import ReactFireMixin from 'reactfire'
class App extends Component{
  mixins: [ReactFireMixin]
  state={
    links: []
  }

  redirectToProfile = () => {
    while(this.props.loading === true){
      return(
        <div className='loading'>
          <Redirect to='/loading' />
        </div>
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
      links: navLinks
    })
    return console.log('New Links')
  }
 
  componentDidMount(){
    this.props.setLoading()
    
    setTimeout(() => {
      this.props.checkLogin()
    }, 5000)
    window.addEventListener('keypress', this.handleKey)
  }


  handleKey = (event) => {
    switch(event.key){
      case "w":
          this.props.setType(2)
          break
      case "s":
        this.props.setType(1)
        break
      case "a":
          this.props.setType(3)
          break
      case "d":
          this.props.setType(4)
          break
      default:
        break
    }
  }

 

  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h1>ADVANCEME</h1>
      <div className='animation'><AnimationContainer /></div>
      <div className="ContentBox1">
      <div className="ContentBox2">
        <Router>
          {this.renderNavBar()}
          {this.redirectToProfile()}
          <Route path='/login' exact render={(props) => <UserFormContainer {...props} type={'login'} renderLinks={this.addLinks}/> } />
          <Route path='/signup' exact render={(props) => <UserFormContainer {...props} type={'signup'} renderLinks={this.addLinks}/> } />
          <Route path='/home' render={(props) => <UserContainer {...props} renderLinks={this.addLinks}/>} />
          <Route path='/skills' render={(props) => <SkillsContainer {...props} links={['home', 'goals', 'logout']} renderLinks={this.addLinks}/>} />
          <Route path='/goals' render={(props) => <GoalsContainer {...props} links={['home', 'skills', 'logout']} renderLinks={this.addLinks}/>} />
          <Route path='/logout' render={(props) => <Logout {...props} userLogout={this.props.logout}/> } />
          <Route path='/loading'render={(props) => <Loading {...props} renderLinks={this.addLinks}/>} />
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
      setLoading: () => dispatch(setLoading()),
      setType: (num) => dispatch(setType(num))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
