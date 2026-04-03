const name ="hitesh"
const repoCount=50
console.log(name+repoCount+"value");


console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

//string declaration 
const gameName=new String("hitecshhc");
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName[4]);
console.log(gameName[5]);
console.log(gameName[6]);
console.log(gameName[7]);
console.log(gameName[8]);



console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'));

const gameName1=new String("hitesh-hc");
const newString=gameName1.substring(0,4)
console.log(newString);
const anotherString=gameName1.slice(-8,4);
console.log(anotherString);

const newString1="    hitesh     "
console.log(newString1);
console.log(newString1.trim());

const url="https://hitesh.com/hitesh%20cd"
url.replace("%20",'-')


console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));
console.log(url.includes('suresh'));
console.log(gameName1.split('_ '));

