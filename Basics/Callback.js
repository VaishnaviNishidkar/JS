

//Callback -> executing part of code only when is exceution of other part of code is completed
function calculation (operation,callback, num1,num2){

    let result=operation(num1,num2);

    callback(result);

}
function add(x,z){
    return x+z;
}

function print(result){
    console.log(`Result is : ${result}`);
}

calculation(add,print,5,4);