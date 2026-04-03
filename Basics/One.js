const myNumbers=[1,2,3,4,5,6,7,8,9,10]

const newNumbers= myNumbers.map((num)=>num+10)
console.log(newNumbers);

const newNumbers1=myNumbers
     .map((num)=>num*10)
     .map((num)=>num+1)
     .filter((num)=>num>=40)

     console.log(newNumbers1);
     

     const newconcept=[1,2,3]
     const myTotal=newconcept.reduce((acc,currval)=>{
        console.log(`acc: ${acc} and currval:${currval}`);
        return acc+currval
        
     },0)
     console.log(myTotal);

     const myTotal1=newconcept.reduce((acc,currval)=>acc+currval,0)
     console.log(myTotal);
     
     const shoppingCart=[
        {   itemName:"js",
            price:2999
        },
        {   itemName:"python",
            price:3999
        },
        {   itemName:"java",
            price:4999
        },
        {   itemName:"c++",
            price:5999
        }
     ]
     const pay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
     console.log(pay);
     