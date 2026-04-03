var sum=function(num1,num2){
    return num1+num2;
}

var sub=function(num1,num2){
    return num1-num2;
}
var mul=function(num1,num2){
    return num1*num2;
}

var div=function(num1,num2){
    return num1/num2;
}


function printSum(addition){
    var result = addition(8,7);
    console.log(result);
    console.log(`The sum is ${result}`);
}

function printSub(subtraction){
    var result=subtraction(9,7);
    console.log(result);
    console.log(`subtraction is ${result}`);
}

function printMul(multiplication){
        var result=multiplication(4,5);
        console.log(`Product is ${result}`);
}

function printDiv(division){
    var result=division(10,2);
    console.log(`Division is ${result}`);   
}
printSum(sum);
printSub(sub); 
printMul(mul);
printDiv(div);