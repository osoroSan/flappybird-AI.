const body = document.querySelector('body')
let closest
simp=(m,n)=>{
return Math.floor(Math.random()*(m-n)+n)
}
imp=(m,n)=>{
return Math.random()*(m-n)+n
}
log=(s)=>{console.log(s)}
const svg=d3.select("svg")
class kai{
constructor(){
this.y=simp(500,0)
this.x=simp(400,0)
this.spectrum=["red","yellow","pink","white","blue","teal"]
this.mass=svg.append("circle").attr("fill",this.spectrum[simp(5,0)]).attr("r",imp(1,0)).attr("cx",this.x).attr("cy",this.y)
}}
for(let i=0; i<350; i++){ let xhuo=new kai()} 
class avatar{
constructor(){
this.vel=0
this.grav=0.088
this.y=250
this.x=100
this.score=0
this.force=-3
this.mass=svg.append("circle").attr("r",15).attr("fill","beige").attr("cx",this.x).attr("cy",this.y)
this.brain
}
jay(){
  this.mass.on('click',()=>{
  save(this.brain)
  log(saved)
  })
}
update(n){
//try not using the inverse 
let input=[...n]
input.push(this.x,this.y)
let pred=this.brain.predict(input)
if(this.vel>=4){this.vel=4}
this.vel+=pred[0]
this.vel+=this.grav;
this.y+=this.vel
if(this.y>480){this.y=480}
if(this.y<20){this.y=20}
this.mass.attr("cy",this.y.toFixed(2))
//[this.x,this.w,this.y1,this.h1,this.y2]

if(check(input)===1){
this.mass.attr('fill','green')
this.crash=true
}

}
}
const gap=150
class pipe{
constructor(s){
this.x=s
this.y1=5
this.h1=simp(300,100)
this.y2=this.y1+this.h1+gap
this.h2=500-this.y2
this.w=25
this.crash
this.mass=svg.append("rect").attr("x",this.x).attr("fill","grey").attr("width",this.w).attr("y",this.y1).attr("height",this.h1)
this.bass=svg.append("rect").attr("x",this.x).attr("fill","grey").attr("width",this.w).attr("y",this.y2).attr("height",this.h2)
}

update(){
this.x-=0.8

if(this.x<192&&this.x>50){
closest =[this.x,this.w,this.y1,this.h1,this.y2,this.h2]
}
if(this.x<50-(this.w+7.5)){ 
for (let i = 0; i < matingpool.length; i++) {
if(!matingpool[i].crash){
matingpool[i].score++
} 
}
}

if(this.x<-25){
this.x=600   
this.y1=5
this.h1=simp(300,100)
this.y2=this.y1+this.h1+gap
this.h2=500-this.y2
this.bass.attr("y",this.y2)   
this.mass.attr("y",this.y1)
this.bass.attr("height",this.h2)   
this.mass.attr("height",this.h1)
}
this.bass.attr("x",this.x)   
this.mass.attr("x",this.x)

}
}
var kipe=[]
let daa=[375,575,775]
let atom=new pipe(daa[0])
let toni=new pipe(daa[1])
let kodak=new pipe(daa[2])

let john=0
let szaz=[]
bond=()=>{
john++
atom.update ()
toni.update ()
kodak.update ()

if(closest){
for (let i = 0; i < society.length; i++) {
society[i].update(closest)
society[i].jay()
}
for (let k = 0; k < society.length; k++) {
if(society[k].crash){
if (szaz.includes(society[k])) {
  society[k].mass.remove()
}else{
szaz.push(society[k]) 
society[k].mass.remove()
}
if(szaz.length==population){
run() 
log(society.length)
szaz.length=0 
}
}   
}          

}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
if(john<10000){
requestAnimationFrame(bond) 

}

//log(society)
}

requestAnimationFrame(bond) 