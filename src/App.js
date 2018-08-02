import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import Form from './components/form/Form'
import Cards from './components/cards/Cards'
import Library from './components/library/Library'
import MyLoads from './components/myloads/MyLoads'
import axios from 'axios'
import {withRouter,Switch, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {pullTableU,pullTableD} from './ducks/reducer'


///// The plan here is to make our large database calls at this level, which will allow us to render off of 
//props in lower components. That should give us good response time on data availability assuming that component did mount is not a total
//jerk and screws me over. So db calls here, and then we will end up using those lower down.

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      userTable:[],
      defaultTable:[]
    }
  }

   getUserTable(){
    setTimeout(()=>{axios.get('/spotter/api/uloads')
    .then(response=>{this.setState({userTable:response.data});
    console.log(this.state.userTable);this.props.pullTableU(response.data)})
  },1000)}

   getDefaultTable(){
    setTimeout(()=>{axios.get('/spotter/api/dloads')
    .then(response=>{this.setState({defaultTable:response.data});
    console.log(this.state.defaultTable);this.props.pullTableD(response.data)})
  },1000)}

  componentDidMount(){
    this.getUserTable();
    this.getDefaultTable();
  }

  render() {
    return (
      <div>
        <Header/>
        <Link to="/form"><button>Form</button></Link>
        <Link to="/"><button>Cards</button></Link>
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

function  mapStateToProps(state){
  return{
    name:state.name
  }
}

export default withRouter(connect(mapStateToProps,{pullTableU,pullTableD})(App));
