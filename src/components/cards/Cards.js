import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {pullTableU} from '../../ducks/reducer'
import {connect} from 'react-redux'
import axios from 'axios'




class Cards extends Component {
  constructor(props){
    super(props)
    this.state={
      input:""
    }
  }

  getUserTable(){
    setTimeout(()=>{axios.get('/spotter/api/uloads')
    .then(response=>{this.setState({userTable:response.data});this.props.pullTableU(response.data)})
  },1000)}

  render() {
    return (
      <div className="cardMaster">
        <div className='linkHolder'>
          <Link to="/myloads"><button onClick={()=>this.getUserTable()}className="cardNavButton">MyLoads</button></Link>
          <Link to="/library"><button className="cardNavButton">Library</button></Link>
          <Link to="/admin"><button className="cardNavButton">Admin</button></Link>
        </div>
        <div className="welcomeMaster">
          <div className="welcomeMiddle">
            <div className="welcomeChild">
              <div className ='listItem welcome'>
                Welcome to SPOTTER
              </div>
              <div className ='listItem'>
                Your online resource for long distance shooting calculations
              </div>
              <div className ='listItem'>
                Getting Started:
              </div>
              <div className='listHolder'>
                <div className ='listItem'>
                  1. Head over to the Library. There you will find ammunition data gathered from Federal Premium. Once you have found the load you are looking for, just click on it and you will be brought to the Calculator with that loads information all ready for you to use.
                </div>
                <div className ='listItem'>
                  2. On the Calculator page, you are able to modify any of the load data from the Library. You can also save any of your inputs, which can then be found in the MyLoads section.
                </div>
                <div className ='listItem'>
                  3. Once you have all your inputs in place, you can click Calculate to see exactly what happens to your bullet in the air.
                </div>
                <div className ='listItem'>
                  4. Finally, for those visual people out there, at the bottom of the Calculator, you will see a graph. With all your inputs still in place, click the Show Flight Path button, which will chart your bullets path for 1000 yards.
                </div>
                <div className ='listItem'>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default connect(null,{pullTableU})(Cards)
