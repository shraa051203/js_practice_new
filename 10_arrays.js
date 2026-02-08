// const students=['ayush','arya','soham']
// console.log(students)
// console.log(students.length)
// console.log(students[0])

// students[0]="ayush patil"
// console.log(students)

//heterogenous arrays =can store multiple type of array
//#####################################################methods on array
// const arr=[1,2,3,5,"shraa"]
// arr.push("priya")//add at end
// console.log(arr)

// arr.push({name:"piya"});
// console.log(arr)

// console.log(arr.indexOf("shraa"))
// console.log(arr.toSorted())

//##################################high order function on array
const students=["shraddha","priyansh","Drishti","Akshaya"]

function show(n){
    // console.log(n)
}
/////////////////////////////////for each///////////////////////////////
// students.forEach(show)//takes each ele of array as input and call show function which will print the element

// students.forEach((val) => console.log(val))

// students.map((val)=>console.log(val))//.map returns new array while forEach does not return 

const arr=[1,2,3,4,5,6,7,8]

// multiple each number of above arr by 2
// by using forEach 
// arr.forEach((n)=>console.log(n*2))

///////////////////////////////////////map//////////////////////
// newarr=[]
// arr.map((n)=>(newarr.push(n*2)))
// console.log(newarr)

//////////////////3 .find
// let ans=arr.find((num)=>num===2*2)
// console.log(ans)


///////////////////////.findIndex/////////////////////////
// let answer=arr.findIndex((num)=>num===2*4)
// console.log(answer)

//////////////////////////includes/////////////////////////////////
// console.log(arr.includes(3))

/////////////////////filter/////////////////////////////////
// const newArr= arr.filter((num)=>num%2==0)
// console.log(newArr)

//////////////////slice=>gives subarray/////////////////////////
// let newArr= arr.slice(1,5)
// console.log(newArr)

////////////////////splice /////////////////////////////////
// let newArr=arr.splice(1,4)
// console.log(newArr)
// console.log(arr)

//////////////////reduce======reduce() processes the array and returns one final value.
// Used for:sum,product,max/min,grouping,counting
// array.reduce((accumulator, currentValue) => {
//    return newAccumulator;
// }, initialValue)

//const arr=[1,2,3,4,5,6,7,8]
// let sum=arr.reduce((acc,curr)=>acc+curr,0)
// console.log(sum)

// let max = arr.reduce((acc, curr) => 
//     curr > acc ? curr : acc
// );
// console.log(max)

///////////////////////////////////find
// find() returns the first element that satisfies a condition.
// Stops searching after first match
// Returns element, not array
// If nothing found → undefined

let users = [
  {name: "A", age: 18},
  {name: "B", age: 25}
];
let adult = users.find(u => u.age >= 21);
console.log(adult)

//exp-2
let nums = [10, 20, 30, 40];

let result = nums.find(n => n > 25);

console.log(result); // 30


/////////////////////////some() 
// checks whether at least one element satisfies the condition.
// Returns true or false
// Stops early when condition becomes true



//every() – Check if ALL elements match
// Definition
// every() checks whether all elements satisfy the condition.
// Returns true or false
// Stops early when condition becomes false


// find → first value
// some → at least one
// every → all values