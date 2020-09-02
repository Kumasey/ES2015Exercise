//                                                      NUMBER 1
// var person = {
//     fullName: "Harry Potter",
//     sayHi: function(){
//         setTimeout(function(){
//             console.log("Your name is " + this.fullName)
//         }.bind(this),1000)
//     }
// }

//                                                 REFACTORED OUTPUT:
const person = {
    fullName: "Harry Potter",
    sayHi: function() {
        setTimeout(() => {
            console.log("Your name is " + this.fullName)
        },1000)
    }
}
person.sayHi()


//                                                     NUMBER 2
//  var name = "Josie"
// console.log("When " + name + " comes home, so good")

//                                               REFACTORED OUTPUT:
let name = "Josie"
console.log(`When ${name} comes home, so good`)



//                                                    NUMBER 3
// var DO_NOT_CHANGE = 42;
//    DO_NOT_CHANGE = 50; // stop me from doing this!


//                                                REFACTORED OUTPUT:
const DO_NOT_CHANGE = 42
DO_NOT_CHANGE = 50 //you have been stopped!





//                                                     NUMBER 4
//  var arr = [1,2]
//    var temp = arr[0]
//    arr[0] = arr[1]
//    arr[1] = temp

//                                              REFACTORED OUTPUT:
let arr = [1,2]
let temp = arr[0]
arr[0] = arr[1]
arr[1] = temp



//                                                     NUMBER 5
//   function double(arr){
//     return arr.map(function(val){
//       return val*2
//     });
//    }

//                                              REFACTORED OUTPUT:
const double = arr => {
    return arr.map(val => val*2)
   }


//                                                      NUMBER 6
// var obj = {
//     numbers: {
//        a: 1,
//        b: 2
//    } 
//  }

// var a = obj.numbers.a;
// var b = obj.numbers.b;

//                                              REFACTORED OUTPUT:
let obj = {
    numbers: {
       a: 1,
       b: 2
   } 
 }

let a = obj.numbers.a;
let b = obj.numbers.b;



//                                                  NUMBER 7
// function add(a,b){
//     if(a === 0) a = 0
//     else {
//         a = a || 10    
//     }
//     if(b === 0) b = 0
//     else {
//         b = b || 10    
//     }
//     return a+b
//   }

//                                              REFACTORED OUTPUT:
const add = (a,b) => {
    if(a === 0) a = 0
    else {
        a = a || 10    
    }
    if(b === 0) b = 0
    else {
        b = b || 10    
    }
    return a+b
  }



// Research the following functions - what do they do?

// Array.from:

// Array.form is a javaScript static method that creates a new, shallow-copied Array instance from an array-like or iterable object

// Object.assign:

// Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

// Array.includes:

// includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate

// String.startsWith:
// The startsWith() method determines whether a string begins with the characters of a specified string. This method returns true if the string begins with the characters, and false if not.
