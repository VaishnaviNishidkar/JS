//for

//["","",""]

//[{} ,{} ,{}]
const arr=[1,2,3,4,5]
for(const num of arr){
  console.log(num);
  
}

const greeting="Hello World"
for(const greet of greeting){
    console.log(`each char is ${greet}`);
    
}
//map
const map=new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("UK","United Kingdom")
map.set("IN","India")
console.log(map);

//for-of->arrays vrti
for(const key of map){
    console.log(key);
    
}
for(const [key,value] of map){
    console.log(key, ':' ,value);
    
}

/*
not iterable-> cause error
const myObject={
    'Game1':"Temple Run",
    'Game2':"Subway Surfer",
}
for(const[key,value]of myObject){
    console.log(key,':- ',value);
    
}*/

//for-in->objects vrti
const myObject={
js:'JavaScript',
py:'Python',
java:"java",
cpp:"C++"
}
for(const key in myObject){
    console.log(key);
    
}
console.log("_____________");

for(const key in myObject){
    console.log(myObject[key]);
    
}
console.log("_____________");
for(const key in myObject){
    console.log(`${key} is shortcut for ${myObject[key]}`);
    
}

const prgrming=['js','cpp','py','java']
for (const key in prgrming){
    console.log(key);
    
}
console.log("_____________");
for (const key in prgrming){
    console.log(prgrming[key]);
    
}
console.log("_____________");

const coding=['js','ruby','cpp','py','java','kotlin']

/*coding.forEach(function (item) {
    console.log(item);
    
    
});*/

/*coding.forEach((item)=>{
    console.log(item);  
})*/


/*
function printme(item){
    console.log(item);
    
}
coding.forEach(printme)*/




coding.forEach((item,index,arr)=>{
    console.log(`${item},${index}, ${arr}`);
})
const mycoding=[
    {
        langname:"js",
        lagFilename:"app.js",

    },
    {
        langname:"java",
        lagFilename:"app.java",

    },
    {
        langname:"python",
        lagFilename:"app.py",

    },

]
console.log("______________");
mycoding.forEach((item)=>{
    console.log(item.langname);
    
})