const gap=150
class pipe{
constructor(s){
this.s=s
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
reset(){
this.x+=200
// this.bass.remove()
// this.mass.remove()
// this.mass=svg.append("rect").attr("x",this.x)
// this.bass=svg.append("rect").attr("x",this.x)
}
update(){
this.x-=1
if(this.x<192&&this.x>50){
closest =[this.x,this.w,this.y1,this.h1,this.y2,this.h2]
}
if(Math.round(this.x)==15){
    //54frames
for (let i = 0; i < society.length; i++) {
society[i].score++

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
// let dan= retrieve()
// log(dan)
let john=0
let szaz=[]
bond=()=>{
john++
atom.update ()
toni.update ()
kodak.update ()

if(closest){
    //dan.update(closest)
for (let i = 0; i < society.length; i++) {
society[i].update(closest)
society[i].jay()
if(society[i].crash){
society[i].mass.attr('fill','red')
society[i].mass.remove()
szaz.push(...society.splice(i,1))
}
}        
}
if(society.length===0){
//
//run()
for (let i = 0; i < szaz.length; i++) {
    if(szaz[i].score>maxfit) {
    maxfit=szaz[i].score
    save(szaz[i].brain,szaz[i].score)
    }
    }
// sim()
init()
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
if(john<Infinity){
requestAnimationFrame(bond) 

}

//log(society)
}

requestAnimationFrame(bond) 