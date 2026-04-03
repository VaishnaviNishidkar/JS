var name="Ram";
function test(){
    var name="Shyam";
    console.log(name); ///Shyam bcz scope in js works from inward to outward i.e it first looks for the variable in the local scope if it is not found then it looks for the variable in the outer scope and so on until it reaches the global scope if it is not found then it gives an error
    
}
test();
console.log(name); ///Ram bcz scope in js works from inward to outward 