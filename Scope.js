//Scope in js 


var name ="Vaishnavi";  //this variable is in global scopel
console.log(name);

{
    //This is one block of code and this variable is in block scope still it is accessible everywhre bcz it is var variable
    var x=90;
    console.log(x);  
}
 console.log(x);

/*{
    //This is one block of code and this variable is in block scope it isnt accesible outside the block scope bcz it is let variable same for cosnt variable
    let y=70;
    console.log(y);  
}
console.log(y);
*/


for(var i=0;i<5;i++){
console.log(name);

}


