"use strict";
//Number :- 
// Number + String Operation
let a = 10 
let b = 20
let c = "The c is : " + a + b // output ---> the c is : 1020
c = "The c is : " + (a + b) // output ---> the c is : 30
//console.log("The Result is : " + a + b) // ^ same ,,
//console.log("The Result is : " + (a + b)) //output ---> The result is : 30
//console.log(c)

// type number (exponent) -->Extra Large are Extra small
let x = 123e3 // add 0(zeros) 123e3 ---> 123000
//console.log(x) 
//console.log(typeof x)

// arithmetic - , * , / , % ---> It's working in the Operations 
a = "20"
b = 20
c = a % b // otuput ---> 1 and two strings "20" / "20" are same --> 1
//console.log(c);

a = "10"
b = "10"
c = a / b // output ---> 1
//console.log(c)

//NaN(Not-a-Number) Value  --> is the Data Number Type ----------------------------------------------->>>
a = 100 
b = "apple"
a = NaN;
c = a / b // Get the output in NaN 
//console.log(c)
//console.log(typeof NaN)


// Infinity --> Any Divid By zero is Infinity 
// Infinity is Number Data type
let myNumber = 2
let txt = ""
while(myNumber != Infinity){
  myNumber = myNumber * myNumber 
  txt = txt + myNumber + "\n"
  //console.log(txt)
}
//console.log(typeof Infinity)

// Hexadecimal
x = 0xad  // --> 173
//console.log(x)


// Convertion String ruteun as a Number use To Methods()  --------------------------------->>>
//parseInt(),parseFloat() are similar
//Number() --> ES6 
let number = "1200"
myNumber = "12.78"
x = parseInt(number)
a = Number(myNumber) // 12.78
b = parseFloat(myNumber) //12.78
//console.log(a,b)
//console.log(typeof number)
//console.log(typeof x) 
//console.log(typeof a)
//console.log(Number("10 7")) // NaN
//console.log(parseInt("10 7")) // 10 

// Js Number as Object
let num = new Number(123) // Object type
x = 123
a = new Number(123)
b = num == x // true
b = num === x // false
x = num == a // false
//console.log(x)
//console.log(b)
//console.log(typeof num)



// BigInt 
// Two types to declare BigInt() method && using n Ex: 121121221n
let big = 17028091n
x = BigInt(98217323)
//console.log(big * x)
//console.log(typeof x)
//console.log(typeof big)

// NUmber() have same Methods
a = 3.9 // false
b = 8787908709878969 // tru
x = Number.isSafeInteger(b)
x = Number.isInteger(a)
//console.log(x)
x = Number.parseInt("123")
x = Number.parseFloat("98917")
//console.log(x)

// NUmber Methods() -------------------------------------------------------------->>>>

/*
  toString()
  toExponential()
  toFixed()
  toPrecision()
  ValueOf()

*/

// toString NUmber To String  
x = 120 // number 
b = x.toString() // string
//console.log(typeof x)
//console.log(typeof b)

// Exponential
let  e = 921
x = e.toExponential() // 9.21e+2
x = e.toExponential(6) // 9.210000e+2
//console.log(x)
//console.log(typeof x)

// toFixed 
// after .decimal have you need it  
x = 9.821
b = x.toFixed(6) //9.821000
b = x.toFixed(1) //9.8
b = x.toFixed(3) //9.821
b = x.toFixed() //10 ----->>> This only Round the value
//console.log(b)

//toPrecision
// similer are toFixed but this value in start on after decimal
x = 9.676
b = x.toPrecision() // No changes
b = x.toPrecision(2)
b = x.toPrecision(3)
//console.log(b)

// valueOf is return the number as number
x = 123 
a = x.valueOf() // number No needed
//console.log(typeof a)







