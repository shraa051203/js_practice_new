"use strict";//treat all js as newer version

let name="shraddha"
let age=20
let isadult=true

//############ primitive datatype ############################

/* number 
typeof NaN==>> "number" 
number=> 2 to power 53 
*/

// bigint=> used for very large integers beyond number limit 
const bignumber = 5643789256345278n


/* string =>""
`-` for templet literals 
let names="shraa"
let msg=`hello ${names}!!`;
console.log(msg)*/


/* boolean => true , false*/


//null=> standalone value/ intentional empty value 
//typeof null=> object


/* undefined=>  variable declared not assigned value yet 
let x
console.log(x);
*/


//symbol => used to create unique identifiers
// let id = Symbol("id")

//########################### non primitive datatypes/ reference type #########################################
//object=> stores key value pairs 
let person={
    name: "john",
    age:25
};

// array 
let arr=[1,2,3,4,5,5]
// typeof arr==> object
console.log(Array.isArray(arr));


// function
function greet(){
    console.log("hello");
}
greet();
// typeof greet ==> function

console.log(typeof arr);
console.log(typeof greet);
console.log(typeof person);


// console.log(typeof null); //object
// console.log(typeof undefined); //undefined


// ##########################Datatype conversion##########################//////////////

// let num="5"+2
// let sum=true+2
// console.log(num)
// console.log(sum)


//## 1 convert to number 
// Number("10") // 10
// Number("abc")//NaN
// parseInt("12px")//12
// parseFloat("3.5")//3.5


// 2 convert to string  
// String(123)//"123"
// (123).toString()

// 3 convert to boolean 
// false values in js=> onabort,"",null, undefined,NaN,false
// else everything true
//boolean(0)// false
//boolean("hi")//true





/*
let score="3456abc"

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

"33"=> 33
"22hdg"=> NaN
true=>1 ; false=> 0
*/












