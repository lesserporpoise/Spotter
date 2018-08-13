let distance = [0.1,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000]
let velocity = 2000
let splits = []
let gFps = 32.1740

// for (let i=0;i < distance.length;i++){
// splits.push((distance[i]*3)/velocity)
// }

splits = distance.map((x)=>{return x*3/velocity})
let dropSplits = splits.map((x)=>{return(.5*gFps*Math.pow(x,2))})


