class ActivationFunction {
    constructor(func, dfunc) {
    this.func = func;
    this.dfunc = dfunc;
}
}
let softMax= (x,arr)=>{
    let total=0;
    for (let f = 0; f < arr.length; f++) {
    total+=Math.exp(arr[f])
    }
    return (Math.exp(x)/ total)
  }

  // SIGMOID
let sigmoid = new ActivationFunction(
    x => 1 / (1 + Math.exp(-x)),
   y => y * (1 - y)
);
  //TANH\
let tanh = new ActivationFunction(
    x => Math.tanh(x),
   y => 1 - (y * y)
);

let relu=new ActivationFunction(
	x=>Math.max(x,0),
y=>{	
	if(y>=0){return 1}
	if(y<0){	return 0	}
	}
	)

