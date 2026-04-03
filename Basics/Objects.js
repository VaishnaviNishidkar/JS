/*const mySym=Symbol("Key");
const JSUser={
    name:"Hitesh",
    age:18,
    location:"Nagpur",
    email:"Hitesh@google.com",
    isLoggedInn:false,
    lastloginDays:["Monday","Saturday"]
}

console.log(JSUser.email);
console.log(JSUser["email"]);
console.log(JSUser[ "name"]);
console.log(JSUser[mySym]);


JSUser.email="hitesh@chatgpt.com"
//Object.freeze(JSUser)


JSUser.email="hitesh@mnc.com"

console.log(JSUser);

JSUser.greeting=function(){
    console.log("Hello JS User")

}
//console.log(JSUser.greeting);
//JSUser.greeting();

greetingTwo=function(){
 console.log(`Hello Js USer,${this.name}`);

 console.log(JSUser.greeting());
 console.log(JSUser.greetingTwo);
 

 
 
}*/

//singleton
const tinderUser=new Object();
console.log(tinderUser);
const tinderUser1={};
console.log(tinderUser1);


tinderUser.id="123abc"
tinderUser.name="Samyak"
tinderUser.isLoggedIn=true

console.log(tinderUser);

const regularUser={
    email:"some@google.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"Sharma"   
        
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.userfullname);
console.log(regularUser.userfirstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={obj1,obj2}

console.log(obj3);
const obj4=Object.assign(obj1,obj2)
const obj5={...obj1,...obj2}
console.log(obj5);
const users=[
    {
        id: 1,
        email:"some1@gmail.com"
    },

    {
        id:2,
        email:"h@gmail.com"

    },
    {
        id:3,
        email:"v@gmail.com"

    },

]
users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log("_________________________");

console.log(tinderUser.hasOwnProperty);
console.log("isloggedin");

const course={
    coursename:"jsinhindi",
    price:999,
    courseInstructor:"Hitesh" 


}

//course.courseInstructor
const{courseInstructor}=course
console.log(courseInstructor);
const{courseInstructor:instructor}=course
console.log(instructor);
const navbar=({company})=>{

}
navbar({company:"hitesh"}  )








