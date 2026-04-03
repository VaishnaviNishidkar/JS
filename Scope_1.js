
function test(){

    if(true){
        var testVar="Inside Block";  //function scope
        let testLet="Inside Block";  //block scope
         console.log(testLet);
    }
    console.log(testVar);
    console.log(testLet); //testLet not defined error aayega kyuki testLet block scope me hai

}

   // console.log(testVar); //testVar not defined error aayega kyuki testVar block scope not accessible outside the function
test(); 