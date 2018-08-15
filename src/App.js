import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import Form from './components/form/Form'
import Cards from './components/cards/Cards'
import Library from './components/library/Library'
import MyLoads from './components/myloads/MyLoads'
import Admin from './components/admin/Admin'
import axios from 'axios'
import {withRouter,Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {pullTableU,pullTableD} from './ducks/reducer'

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
    .then(response=>{this.setState({userTable:response.data});this.props.pullTableU(response.data)})
  },1000)}

   getDefaultTable(){
    setTimeout(()=>{axios.get('/spotter/api/dloads')
    .then(response=>{this.setState({defaultTable:response.data});this.props.pullTableD(response.data)})
  },1000)}

  componentDidMount(){
    this.getUserTable();
    this.getDefaultTable();
  }

  render() {
    return (
      <div className='appMaster'>
        <div className='appChild'>
          <Header/>
          <Switch>
            <Route exact path="/"   component={Cards}/>
            <Route path="/form"     component={Form}/>
            <Route path="/library"  component={Library}/>
            <Route path="/myloads"  component={MyLoads}/>
            <Route path="/admin"    component={Admin}/>
          </Switch>
        </div>
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
