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
save(this.brain,this.score)
log('saved')
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
this.mass.attr("fill",'red')

this.crash=true
}
}
}