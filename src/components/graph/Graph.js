import React, {Component} from 'react';
import {Line} from 'react-chartjs-2'
import {connect} from 'react-redux'

class Graph extends Component{
    constructor(props){
        super(props)
        this.state={
            points:[],
            graphData:{
                labels:['50yds','100yds','150yds','200yds','250yds','300yds',
                '350yds','400yds','450yds','500yds','550yds','600yds','650yds',
                '700yds','750yds','800yds','850yds','900yds','950yds','1000yds'],
                datasets:[
                    {
                        label:['Bullet Drop'],
                        data:[],
                        backgroundColor:['rgba(255,0,0)']
                    }
                ]
            }
        }
    }

computeData(props){
    let distance = [0.1,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000]
    let velocity = props.cardData.vm
    let splits = []
    let gFps = 32.1740

    splits = distance.map((x)=>{return x*3/velocity})
    let gravSplits = splits.map((x)=>{return(.5*gFps*Math.pow(x,2))})
    this.setState({points:gravSplits})
    console.log(gravSplits)

}





  render(){
      return(
        <div className="graphBox">
        <button onClick={()=>{this.computeData()}}></button>
        <br/>
        <Line
            data={this.state.graphData}
            options={{
                maintainAspectRatio: false,
                scales:{
                    yAxes:[{
                        ticks:{
                            max:40,
                            min:-80,
                            stepSize:10
                        }
                    }]
                }

            }}
        />
        This is Where the Graph Begins
        </div>
      )
  }
}

function mapStateToProps(state){
    return{
        cardData:state.cardData
    }
}

export default connect(mapStateToProps)(Graph)


