import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import FormContainer from './containers/FormContainer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route path='/login' render={(props) => <FormContainer {...props} type={'login'}/> } />
          <Route path='/signup' render={(props) => <FormContainer {...props} type={'signup'}/> } />
        </Router>
      </header>
    </div>
  );
}

export default App;
