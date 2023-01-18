//remember to iniit
const population=300
const mutrate=0.5
var matingpool=[]
brainiac=[8,30,30,1]
var society=[]
let maxfit=localStorage.getItem('sco')
let alpha
const select=10
init=()=>{
for (let i = 0; i < population; i++) {
let ind=new avatar()
ind.brain=new brain(brainiac,tanh,tanh)
society.push(ind)
}
}
//init()
save=(n,m)=>{
let net=JSON.stringify(n)
let sco=JSON.stringify(m)
localStorage.setItem('net',net)
localStorage.setItem('sco',sco)
}



run=()=>{
for (let i = 0; i < society.length; i++) {
if(society[i].score>maxfit) {
maxfit=society[i].score
alpha=society[i]
save(alpha)
//retrieve()
}
}
//bestnets.push(...alpha.dna)
let cut=society.map(e=>{return e.score}).sort().reverse()
society.map(e=>{if(e.score>=cut[select]){matingpool.push(e)}})
nextgen()
}
let gen =0
nextgen=()=>{
gen ++
society.length=0
let arr=[]
for (let i = 0; i <Math.floor(population/24); i++) {
arr.push(...cross1())
arr.push(...cross2())
arr.push(...cross3())
}
society.push(...arr)
matingpool.length=0
}
//write one cross for all
cross1=(a,b)=>{
//only bias fusion
let kid1a= new avatar()
kid1a.brain=new brain(brainiac,tanh,tanh)
let kid2a= new avatar()
kid2a.brain=new brain(brainiac,tanh,tanh)
let kid1b= new avatar()
kid1b.brain=new brain(brainiac,tanh,tanh)
let kid2b= new avatar()
kid2b.brain=new brain(brainiac,tanh,tanh)
let kid1c= new avatar()
kid1c.brain=new brain(brainiac,tanh,tanh)
let kid2c= new avatar()
kid2c.brain=new brain(brainiac,tanh,tanh)
let dna1
let dna2
let numa
let numb
if(a){
dna1=matingpool[a].brain.bias
dna2= matingpool[b].brain.bias
numb=b
numa=a
}else{
numb=rand(matingpool.length)
numa=rand(matingpool.length)
dna1=matingpool[numa].brain.bias
dna2=matingpool[numb].brain.bias

}
//1/2 
let ndna1a=[]
let ndna2a=[]
for (let i = 0; i < dna1.length; i++) {
let mat1=new Matrix(dna1[i].rows,dna1[i].cols)
let mat2=new Matrix(dna1[i].rows,dna1[i].cols)
let arr1=[]
let arr2=[]
let mark=0
for (let j = 0; j <dna1[i].data.length; j++) {
mark++
if(mark==1){
arr1.push(dna1[i].data[j])
arr2.push(dna2[i].data[j])
}
if(mark==2){
arr1.push(dna2[i].data[j])
arr2.push(dna1[i].data[j])
mark=0
}
}
mat1.data=arr1
mat2.data=arr2
ndna1a.push(mat1)
ndna2a.push(mat2)
}

//random point
let ndna1b=[]
let ndna2b=[]
let num =rand(0,dna1[0].rows)
ndna1b.push(...dna1.slice(0,num))
ndna1b.push(...dna2.slice(num,dna1[0].rows+1))
ndna2b.push(...dna2.slice(0,num))
ndna2b.push(...dna1.slice(num,dna1[0].rows+1))
//shuffle
let ndna1c=dna1.slice(0,dna1.length+1)
let ndna2c=dna2.slice(0,dna1.length+1)
for (let k = 0; k < dna1.length; k++) {
let num =rand(0,dna1[0].rows)
ndna1c.splice(num,1,dna2[num])
ndna2c.splice(num,1,dna1[num])
}

kid1a.brain.bias.data=ndna1a
kid1a.brain.weights.data=matingpool[numa].brain.weights
kid2a.brain.bias.data=ndna2a
kid2a.brain.weights.data=matingpool[numb].brain.weights
kid1b.brain.bias.data=ndna1b
kid1b.brain.weights.data=matingpool[numa].brain.weights
kid2b.brain.bias.data=ndna2b
kid2a.brain.weights.data=matingpool[numb].brain.weights
kid1c.brain.bias.data=ndna1c
kid1c.brain.weights.data=matingpool[numa].brain.weights
kid2c.brain.bias.data=ndna2c
kid2c.brain.weights.data=matingpool[numb].brain.weights
mutate(kid1a.brain,mutrate,Math.random().toFixed(1))
mutate(kid2a.brain,mutrate,Math.random().toFixed(1))
mutate(kid1b.brain,mutrate,Math.random().toFixed(1))
mutate(kid2b.brain,mutrate,Math.random().toFixed(1))
mutate(kid1c.brain,mutrate,Math.random().toFixed(1))
mutate(kid2c.brain,mutrate,Math.random().toFixed(1))
return [kid1a,kid2a,kid1b,kid2b,kid1c,kid2c]
}
cross2=(a,b)=>{
//only weights fusion
let kid1a= new avatar()
kid1a.brain=new brain(brainiac,tanh,tanh)
let kid2a= new avatar()
kid2a.brain=new brain(brainiac,tanh,tanh)
let kid1b= new avatar()
kid1b.brain=new brain(brainiac,tanh,tanh)
let kid2b= new avatar()
kid2b.brain=new brain(brainiac,tanh,tanh)
let kid1c= new avatar()
kid1c.brain=new brain(brainiac,tanh,tanh)
let kid2c= new avatar()
kid2c.brain=new brain(brainiac,tanh,tanh)
let numa
let numb
if(a){
dna1=matingpool[a].brain.bias
dna2= matingpool[b].brain.bias
numb=b
numa=a
}else{
numb=rand(matingpool.length)
numa=rand(matingpool.length)   
dna1=matingpool[numa].brain.bias
dna2=matingpool[numb].brain.bias
}
//1/2 
let ndna1a=[]
let ndna2a=[]
for (let i = 0; i < dna1.length; i++) {
let mat1=new Matrix(dna1[i].rows,dna1[i].cols)
let mat2=new Matrix(dna1[i].rows,dna1[i].cols)
let arr1=[]
let arr2=[]
let mark=0
for (let j = 0; j <dna1[i].data.length; j++) {
mark++
if(mark==1){
arr1.push(dna1[i].data[j])
arr2.push(dna2[i].data[j])
}
if(mark==2){
arr1.push(dna2[i].data[j])
arr2.push(dna1[i].data[j])
mark=0
}
}
mat1.data=arr1
mat2.data=arr2
ndna1a.push(mat1)
ndna2a.push(mat2)
}
//random point
let ndna1b=[]
let ndna2b=[]
let num =rand(0,dna1[0].rows)
ndna1b.push(...dna1.slice(0,num))
ndna1b.push(...dna2.slice(num,dna1[0].rows+1))
ndna2b.push(...dna2.slice(0,num))
ndna2b.push(...dna1.slice(num,dna1[0].rows+1))
//shuffle
let ndna1c=dna1.slice(0,dna1.length+1)
let ndna2c=dna2.slice(0,dna1.length+1)
for (let k = 0; k < dna1.length; k++) {
let num =rand(0,dna1[0].rows)
ndna1c.splice(num,1,dna2[num])
ndna2c.splice(num,1,dna1[num])
}
kid1a.brain.weights.data=ndna1a
kid1a.brain.bias.data=matingpool[numa].brain.bias
kid2a.brain.weights.data=ndna2a
kid2a.brain.bias.data=matingpool[numb].brain.bias
kid1b.brain.weights.data=ndna1b
kid1b.brain.bias.data=matingpool[numa].brain.bias
kid2b.brain.weights.data=ndna2b
kid2a.brain.bias.data=matingpool[numb].brain.bias
kid1c.brain.weights.data=ndna1c
kid1c.brain.bias.data=matingpool[numa].brain.bias
kid2c.brain.weights.data=ndna2c
kid2c.brain.bias.data=matingpool[numb].brain.bias
mutate(kid1a.brain,mutrate,Math.random().toFixed(1))
mutate(kid2a.brain,mutrate,Math.random().toFixed(1))
mutate(kid1b.brain,mutrate,Math.random().toFixed(1))
mutate(kid2b.brain,mutrate,Math.random().toFixed(1))
mutate(kid1c.brain,mutrate,Math.random().toFixed(1))
mutate(kid2c.brain,mutrate,Math.random().toFixed(1))

return [kid1a,kid2a,kid1b,kid2b,kid1c,kid2c]
}
cross3=()=>{
let kes=rand(matingpool.length)
let kel=rand(matingpool.length)  
let nts1=cross1(kel,kes)
let nts2=cross2(kel,kes)
return [...nts1,...nts2]
}
cross4=()=>{
  //mutate without crossing
}
const mutate=(n,y,g)=>{
let sd =n.neurons
let sum=0
for(let i=1; i<sd.length; i++){ 
sum+=sd[i-1]*sd[i]+sd[i]
}
let num=Math.ceil(sum*y)
let wnum=Math.floor(num*g)
let bnum=num-wnum

let baxter=new brain(sd,tanh,tanh)
baxter.weights=n.weights
baxter.bias=n.bias
for(let i=0; i<bnum; i++){ 
let jun=Math.floor(Math.random()*(baxter.bias.length-0)+0)
let r=Math.floor(Math.random()*(baxter.bias[jun].data.length-0)+0)
let rand=Math.random()*(1-(-1))+(-1)
baxter.bias[jun].data.splice(r,1,[rand])
}
for(let i=0; i<wnum; i++){ 
let jun=Math.floor(Math.random()*(baxter.weights.length-0)+0)
let r=Math.floor(Math.random()*(baxter.weights[jun].data.length-0)+0)
let rand=Math.random()*(1-(-1))+(-1)
let p=Math.floor(Math.random()*(baxter.weights[jun].data[r].length-0)+0)
baxter.weights[jun].data[r].splice(p,1,rand)
}

return baxter
}
sim=()=>{
  log(society.length)
for (let i = 0; i < szaz.length; i++) {
if(szaz[i].score>maxfit) {
maxfit=szaz[i].score
save(szaz[i].brain,szaz[i].score)
}
}
let net = JSON.parse(localStorage.getItem('net'))
for (let h = 0; h <population; h++) {
let kid = new avatar()
kid.brain=new brain(net.neurons,tanh,tanh)
for (let i = 0; i < kid.brain.weights.length; i++) {
kid.brain.weights[i].data =net.weights[i].data
kid.brain.bias[i].data =net.bias[i].data
}
mutate(kid.brain,mutrate,Math.random().toFixed(1))
//log(kid.brain.predict([1,2,3,4,5,6,7,8]))
society.push(kid)   
}
szaz.length=0
}
