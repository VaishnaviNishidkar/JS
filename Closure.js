//closure
function outerfunction(outerVariable){
    return function innerfunction(innerVariable){
        console.log(`Outer variable :: ${outerVariable}`);
        console.log(`Inner variable :: ${innerVariable}`);
    };
}

var newFunction=outerfunction("outside");
newFunction("inside");

//closure is a function that has access to the variables in its outer scope even after the outer function has returned. It allows the inner function to access and manipulate the variables of the outer function, creating a persistent state that can be used across multiple invocations of the inner function.  
//closur is function that takes reference of parent variable till child func is in memory and still executing