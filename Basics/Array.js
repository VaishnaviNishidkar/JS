const myarr=[0,1,2,3,4,5,]
console.log(myarr[0])
console.log(myarr[1])
console.log(myarr[2])
console.log(myarr[3])
console.log(myarr[4])
console.log(myarr[5])   

const myheros=["shaktiman","naagraj"];
const myArr2=new Array(1,2,3,4)

//array methods

myarr.push(6)
console.log(myarr);

console.log("*************")

myarr.pop()
console.log(myarr); 

console.log("*************")

myarr.unshift(8)
console.log();

console.log("*************")

myarr.shift()
console.log(myarr.includes(7));
console.log(myarr.indexOf(3));


console.log("*************")


console.log(Array.isArray(myarr));
console.log(myarr.length);

const newarr=myarr.join()

console.log("*************")

console.log(myarr);
console.log(newarr);
console.log(typeof newarr);


console.log("*************")



//sliice and splice
console.log("A",myarr);
const myn1=myarr.slice(1,3)

console.log("*************")


console.log(myn1);
console.log("B",myarr);

console.log("*************")


const myn2=myarr.splice(1,3)
console.log(myn2);
console.log("C",myarr);

console.log("*************")


const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","batman","flash"]

marvel_heros.push(dc_heros)

console.log(marvel_heros)

console.log("*************")

console.log(marvel_heros[3][1]);
const allHeros=marvel_heros.concat(dc_heros)

console.log("*************")

console.log(allHeros);

const all_new_heros=[...marvel_heros,...dc_heros]

console.log("*************")

console.log(allHeros.new_heros)

const another_array=[1,2,3,[4,5,6],[6,7][4,5]]
const real_another_array=another_array.flat(Infinity)

console.log("*************")


console.log(real_another_array);    
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"}));


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));










