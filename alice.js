log=(n)=>{console.log(n)};
class brain {
constructor(neurons,act1,act2){
this.neurons=neurons;
this.weights=createArch(this.neurons)[0];
this.bias=createArch(this.neurons)[1];
this.act1=act1;
this.act2=act2;
}
predict(inputArray){
let output=Matrix.fromArray(inputArray)
for (let i = 0; i < this.weights.length; i++) {
output=Matrix.multiply(this.weights[i],output)  
output.add(this.bias[i])  
if(i<this.weights.length-1){output.map(this.act1.func)}
if(i===this.weights.length-1){output.map(this.act2.func)} 
}     
return output.toArray()
//end of predict
}
}