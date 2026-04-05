//Hoisting
//var number;
//It is default behaviour of JS in which it moves all declatation to top

console.log(number);

var number=8;  // takes this line and put it on top ---> var number  ---> only declaration  not initialization

console.log(number);
//like variables JS also hoists function declaration

add(5,4);

function add(x,y){              //Js take this and put on top of add(5,4)
    console.log(x+y);
}