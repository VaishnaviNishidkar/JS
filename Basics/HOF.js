//Higher order function
function calculation(operation,num1,num2){    //any function which is capable of taking function as a argument or capable of returning function as part of argumnt k as HOF

    let result=opertaion(num1,num2);
    return result;
}

function add(x,z){
    return x+z;
}

function sub(x,z){
    return x-z;
}


console.log(calculation(add,5,4));
console.log(calculation(sub,5,4));

function test(){
    //HOF
    return function returnFnc()  {};
      
}