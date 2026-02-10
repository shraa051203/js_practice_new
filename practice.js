/////////////////////////////this keyword inside object
// const user={
//     name:"shraa",

//     hello:function(){
//         console.log(this.name);
//     },

//     greet :()=>{
//         console.log(this.name)
//     }
// }
// user.hello()
// user.greet()

// function greet(name="Guest"){
//     console.log(`hello ${name}`)
// }
// greet("shraa")

/////////////////////////////////////////////////////////
//closure--A closure is a function that remembers and can access
//  variables from its outer (lexical) scope even after the outer 
// function has finished executing.

// function outer(){
//     let count=0;

//     return function inner(){
//         count++;
//         console.log(count);
//     };
// }
// const counter=outer();
// counter();
// counter();
// counter();
// counter();
// counter();

// function createbankaccount(balance){
//     return {
//         deposit(amount){
//             balance+=amount;
//             console.log(balance);
//         },
//         withdraw(amount){
//             balance-=amount;
//             console.log(balance);
//         }
//     }
// }
// const p1=createbankaccount(1000);
// p1.deposit(500);
// p1.withdraw(200)

/////////////////////////////////////////////////////////
// let arr=[1,2,3,4,5];
// let aro=new Array(1,2,3,4,5,6,7,8);

// let array=[3,6.7,"shraa",true]
// console.log(arr[0]);
// console.log(arr[2]);
// arr[3]=7
// console.log(arr)
// console.log(arr.length)

// console.log(arr.push(60))
// console.log(arr)

// arr.unshift(68)
// console.log(arr)
// arr.shift()
// console.log(arr)

// console.log(arr.indexOf(4))
// console.log(arr.includes(4))

// let arr1=[5,6,78,9,5,3,4,444,90]
// console.log(arr1.slice(2,7))
// arr1.splice(1,2)
// console.log(arr1)
// for(let i=0;i<arr1.length;i++){
    // console.log(arr1[i])
// }

// for(let i of arr1){
//     console.log(i)
// }


// arr=[1,2,3,4,5,6,7,8]
// let square=arr.map(n=>n*n)

// console.log(square)

// nums=[2,3,4,5,6,7,8,9]
// let even=nums.filter(n=>n%2==0)
// console.log(even)

///////////////////////////////////////////////////////////////
//object
// function person(name, subject){
//     this.name=name;
//     this.subject=subject;
// }

// let p1= new person("shraa","js")
// console.log(p1.name)


// class office{
//     constructor(name,sal){
//         this.name=name;
//         this.sal=sal;
//     }
// }
// let p1=new office("shraa",560000);
// // console.log(p1.sal)

// console.log(Object.keys(office));
// console.log(Object.values(office));

// Object.keys(office)


//deconstructing 
// let person ={
//     name:"ram",
//     age:22,
//     city:"mumbai",
//     getcountry:()=>{return "india"}
// };

// let name=person.name;
// let age=person.age;
// console.log(name,age);

// let {name,age}=person;
// console.log(name);
// console.log(age);

// const {city,getcountry,...rest}=person
// console.log(getcountry())
list=["shraa","kgaray","hfreu","yhdrt"]

const[name,age,country="india",...rest]=list
console.log(country)
console.log(name);
