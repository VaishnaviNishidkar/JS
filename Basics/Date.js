let myDate=new Date();
console.log(myDate);
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());



console.log(typeof  myDate);
let myCreatedDate=new Date(2023,0,23);

console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());


let myCreatedDate1=new Date(2023,0,23,5,3);
console.log(myCreatedDate.toDateString());

let myCreatedDate2=new Date("2023-01-14");
console.log(myCreatedDate2.toDateString(1/14/2023));


let mytimestamp=Date.now()

console.log(mytimestamp);
console.log(myCreatedDate.getTime());

console.log(Date.now());

console.log(Math.floor(Date.now()/1000));

let newDate=new Date();

console.log(new Date);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:'long',
})





