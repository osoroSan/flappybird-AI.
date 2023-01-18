log=(n)=>{console.log(n)};
createArch=(n)=>{
let weights=[];
let bias=[];
for (let i = 1; i < n.length; i++) {
bias.push(new Matrix(n[i],1).randomize())
weights.push(new Matrix(n[i],n[i-1]).randomize())
}
return [ weights, bias]
}

//returns randnom number btn a-b
rand=(a,b)=>{
if(b){return Math.floor(Math.random()*(b-a)+a)}
if(!b){return Math.floor(Math.random()*a)}}

const check=([a,b,c,d,e,f,g,h])=>{
if(g>a-8&&g<(a+25+8)){
if(h>c&&h<d+8){
return 1
}
if(h>e-8){
return 1
}
}
}
retrieve=()=>{
let net = JSON.parse(localStorage.getItem('net'))
let kid = new avatar()
kid.brain=new brain(net.neurons,tanh,tanh)
for (let i = 0; i < kid.brain.weights.length; i++) {
kid.brain.weights[i].data =net.weights[i].data
kid.brain.bias[i].data =net.bias[i].data
}
return kid
}