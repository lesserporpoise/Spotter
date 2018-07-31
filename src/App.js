import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import Form from './components/form/Form'
import Cards from './components/cards/Cards'
import Library from './components/library/Library'
import MyLoads from './components/myloads/MyLoads'
import {Switch, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Link to="/"><button>Cards</button></Link>
        <Link to="/form"><button>Form</button></Link>
        <Switch>
          <Route exact path="/" component={Cards}/>
          <Route path="/form" component={Form}/>
          <Route path="/library" component={Library}/>
          <Route path="/myloads" component={MyLoads}/>
        </Switch>
      </div>
    );
  }
}

export default App;
