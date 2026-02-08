//############################################ object literals 
// const person={
//     name:"shraddha",
//     age: 22,
//     contact:"889898989",
//     getname: function(){
//         console.log("shraa");
//     },
// };

// console.log(person.getname())


// normal function: camelcaseing=> getage(),addNums()
// constructor function : Pascal case =>GetNum()
//advt: simple
//disadvt: this does not act as blue print


//################################################function constructor
// function Person(fname, lname,contact){
//     this.fname = fname;
//     this.lname=lname;
//     this.contact= contact;

//     this.getName = function(){
//         console.log(this.fname,this.lname);
//     };

//     this.getContact=function(){
//         console.log(this.contact)
//     }
// }

// const p1=new Person("shraa","kharatmal","787998")
// const p2= new Person("john","doe","8989")
// console.log(p1.getContact())
// console.log(p1)



//after es6=> class keyword###########################
class Person{
    constructor(fname,lname,contact){
        this.fname=fname;
        this.lname=lname;
        this.contact=contact;
    }
    getContact(){
        console.log(this.contact);
    }
    getName(){
        console.log(this.fname,this.lname);
    }
}

const p1= new Person("shraa","kharat","99999",)
console.log(p1.getContact())
console.log(p1.getName())