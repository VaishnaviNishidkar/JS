let concept;

function getConcept(callback){
    setTimeout(function(){
        concept ="New concept";     //once this is done then print will bw called
        callback();

    },2000);

}
function print(){
    console.log(concept);
}
 getConcept(print);
