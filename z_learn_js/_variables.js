"use strict";
// Java Script 3 Type in declare the variable

// var 
// let
// const 

let var_name = 'var java Script';
let let_name = 'let js';
const const_name = 'const js';
//console.log(var_name)

// console.log(var_name,let_name,const_name);

//  var and let is just declare not asign the value it working
//  But const type is compulsory asign the value 
//  that is means --------> Hostiong

var name_var;
let name_let;  
// const name_const;

// single line declare multipul variable names 

var name,age,city;
let _name,_age,_city;
name = 'kumar',age = 22 , city = 'cni';
_name = 'vel',_age = 21 , city = 'madurai';
const c_name = 'ram',c_age = 27,c_city = 'coiva';

// var is Global scop 
// let and const is the block {} scop are function scop

// Arithametic Operators ---> + ,-,*,/,%, <<,>> shit operetor shifting the binary 1 's 
// (-) decrement  , (**) Exponentiation , (++) increment 

/*let a,b;
a=10,b=2;
let x = a + b
//console.log(a,b)
console.log(x)
x = a - b 
console.log(x)
x = a * b 
console.log(x) 
x = a / b  
console.log(x)
// give the remainder 
x = a % b 
console.log(x) 
// (-) give the negative value 
x = -a
console.log(x) 
x = a**b
console.log(x)  */


let x = 6 + "6" //---->>66
x = "6"+ 6 //----->> 66
x = "6" + 6 + 6 //---->> 666
x = 6 + 6 + "6" //---->> 126
x = 6 + "6" + 6 // ----> 666
x = 6 + 7 + 8 + "9" // ----> 21 9 = 219 
//console.log(x)

// increment ++ and decremnt -- 
x = 6;
//console.log('starting value',x)
x++
//console.log("incemeent ++",x)
x--;
//console.log('decrement --',x)

//Two Types Data Primitive And Non-Primitive
// primitive Data Types ---------------------------------------->
// Number 
// String 
// Boolean
// undefine
// null
// bigint
//_____________________________________________________
//Numbers;
let num1 = 30;
let num2 = 30.2;

// Es6 Adding new number methods() ;
num1 = Number.isInteger(num1)
num2 = Number.isInteger(num2)
let number = Number.MAX_SAFE_INTEGER
//console.log(num1,num2,number)

// useing Type convertion also
let num = "10"
//console.log(typeof num)
num = Number(num); 
//console.log(typeof num)

// BigInt in ES2017 --------------
// Two types to declare 
let bigInt = 2189807109810281809n; // one method
bigInt = BigInt(997879810281809) // secound method 
// console.log(typeof bigInt);

//String Declare in Two types ("") double quotes are ('') singl quotes && (``)back-tics 
let str = "JavqScript"
let str2 = 'ScriptJava'
// use Back-tics in write string in multipul lines 
// pass the variable inside the quotes help of ${}
let str3 = `String back-tics
            use 'multipul lines'
            and use "$to" inside pass variables ${str}`
//console.log(str3,typeof str3)
// console.log(typeof str,typeof str2)

// boolan type 
let bool_t = true;
let bool_f = false;
// console.log(typeof bool_f,typeof bool_t)

//null 
let null_v = null 
//console.log(typeof null_v) //output : ------->> Object 

//undefine 
let un = undefined;
let u;
//console.log(typeof un,typeof u) // output ----> undefine 

// Non-primitive Data Types
// All are preferred in const variable Type
// Array
// Object 
// Date 

// Array 
// Create Array Preferred in Const variable type 
const arr = [1,'name',2.8,"kumar","vel"]
arr.push("surya")
arr[0] = "arun"
//console.log(arr)
//console.log(typeof arr) //output : ------>> object 

//Object 

const key = {
    name:"siva",
    age:21,
    city:'Theni'
}
//console.log(key)
//console.log(typeof key)
//access Two Methods . dotnotation And [] bracketnotation
//console.log(key.name)
//console.log(key["age"])

// Date 
const date = new Date("2002-06-01")
//console.log(date)
//console.log(typeof date) // -----> Object 

// Declare Function in 3 Type 
// Treditional are normal
function fun(){

}
// Anonymos
const show  = function(){

}
//Arrow 
const arrow = ()=>{

}


