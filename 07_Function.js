function summation(num1,num2,num3){
    let num=num1+num2+num3;
    return num
}
// console.log(summation(1,2,3))


// Arrow function
const Addtwo=(n1,n2)=>{
    let sum=n1+n2
    return sum
}

// console.log(Addtwo(7,4))

const addtwo = (n1,n2)=>n1+n2
const add=(n1,n2)=>(n1+n2)
const sum=(n1,n2)=>({username:'hitesh'})

// console.log(addtwo(2,3))
// console.log(add(2,3))
// console.log(sum(1,2))


// ###############################################       Default parameters 
// Default parameters allow a function parameter to take a default value when no value or undefined is passed.

function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet("Shraa"); // Hello Shraa
greet();        // Hello Guest

//############################################# default vs null
function test(value = 10) {
//   console.log(value);
}

test();          // 10  (no argument)
test(undefined); // 10  (treated like missing)
test(null);      // null (default NOT used)
// Default works only for undefined, not null.

//#############################################################THIS keyword

const person = {
  name: "John",
  greet: function () {
    console.log(this.name);
  }
};

person.greet(); // John


// Arrow Function → Lexical this

// Arrow function does NOT create its own this

// It uses this from surrounding scope

const person1 = {
  name: "John",
  greet: () => {
    console.log(this.name);
  }
};

person1.greet(); // undefined (or window.name in browser)


// “Arrow functions provide shorter syntax and lexical this, making them ideal for callbacks and functional programming.
// Normal functions support dynamic this, constructors, hoisting, and the arguments object, so they are preferred for 
// object methods and traditional function behavior.”


// When to Use What (Interview Answer)
// Use Normal Function when:

// Working with object methods

// Need constructor

// Need dynamic this

// Need hoisting

// Use Arrow Function when:

// Writing short functions

// Using callbacks

// Want lexical this

// Functional programming (map, filter, reduce)