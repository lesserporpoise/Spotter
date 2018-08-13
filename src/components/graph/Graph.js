import React, {Component} from 'react';
import {Line} from 'react-chartjs-2'
import {connect} from 'react-redux'

class Graph extends Component{
    constructor(props){
        super(props)
        this.state={
            graphData:{
                labels:['0yds','50yds','100yds','150yds','200yds','250yds','300yds',
                '350yds','400yds','450yds','500yds','550yds','600yds','650yds',
                '700yds','750yds','800yds','850yds','900yds','950yds','1000yds'],
                datasets:[
                    {
                        label:['Vacuum Flight'],
                        data:[],
                        backgroundColor:['rgba(255,0,0)']
                    },
                    {
                        label:['True Flight'],
                        data:[],
                        backgroundColor:['rgba(0,0,255)']
                    }
                ]
            }
        }
    }

computeData(){
    let distance = [0.1,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000]
    let velocity = this.props.vm
    let splits = []
    let gFps = 32.1740

    splits = distance.map((x)=>{return x*3/velocity})
    let gravSplits = splits.map((x)=>{return(-1*(.5*gFps*Math.pow(x,2)))})
    let newState={...this.state}
    newState.graphData.datasets[0].data=gravSplits;
    newState.graphData.datasets[1].data=gravSplits;
    this.setState(newState);


    console.log(this.state.points)
    console.log(this.state.graphData.datasets[0].data)

}





  render(){
      return(
        <div className="graphBox">
        <button onClick={()=>{this.computeData()}}>Calculate</button>
        <br/>
        <Line
            data={this.state.graphData}
            options={{
                maintainAspectRatio: false,
                scales:{
                    yAxes:[{
                        ticks:{
                            max:10,
                            min:-50,
                            stepSize:5
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
        vm:state.cardData.vm
    }
}

export default connect(mapStateToProps)(Graph)


