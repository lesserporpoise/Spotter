let distance = [0.1,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000]
let velocity = 2000
let bc = .05
let ibc = 1-bc
console.log(ibc)
let decay = (100 - ibc)/100
console.log(decay)
let splits = []
let resistanceSplits = []
let gFps = 32.1740

splits = distance.map((x)=>{return x*3/velocity})
let dropSplits = splits.map((x)=>{return(.5*gFps*Math.pow(x,2))})

resistanceSplits = distance.map((x,y)=>{return (x*3)/(velocity*((100-(ibc*y))/100))})
let realSplits = resistanceSplits.map((x)=>{return (.5*gFps*Math.pow(x,2))})


let vm = 2500;
let range = 1000;
let bcx = (1-bc)/50;

let bulletTime = range*3/vm;
let bulletDecay = (100-(bulletTime*(bcx*range)))/100;
console.log((bulletDecay))
let finalVelocity = bulletDecay*vm


console.log(bulletTime)
console.log(bulletDecay)
console.log(finalVelocity)