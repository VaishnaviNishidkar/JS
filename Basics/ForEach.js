//forEach doesnt return any value
const nums=[1,2,3,4,5,6,7,8,9,10]

const newNums=nums.filter((num)=> num>4)
console.log(newNums)


//op-[]=> because return keyword use nahi kela 
/*const newNums2=nums.filter((num)=>){
    num>4

}
console.log(newNums2)*/

//using filter method with return keyword
const newNums2=nums.filter((num)=> {
    return num>4
})
console.log(newNums2)

//using forEach method

const newNums1=[]
newNums.forEach((num)=>{
    if(num>4){
       newNums1.push(num)          
    }
})
console.log(newNums1);


const Books=[
    {title:"Book1",author:"Author1",genre:"Horror",year:2000,edition:2009},
    {title:"Book2",author:"Author2",genre:"History",year:2010,edition:2015},
    {title:"Book3",author:"Author3",genre:"Fiction",year:2020,edition:2021},
    {title:"Book4",author:"Author4",genre:"Non Fiction",year:1990,edition:2024},
    {title:"Book5",author:"Author5",genre:"Mythology",year:1980,edition:1985},


];

let userbooks=Books.filter((bk)=>bk.genre ==='History')
console.log(userbooks);


userbooks=Books.filter((bk)=>bk.year>2000 && bk.genre ==='Fiction')
console.log(userbooks);


userbooks=Books.filter((bk)=>{ return bk.edition>2010})
console.log(userbooks);