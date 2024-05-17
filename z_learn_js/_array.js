"use strict";
// Array 
// Two ways to declare the array 
let arr = ["apple","orange","banana"] // Object Data type
let arr_ =[
    "apple",
    "oragen",
    "banana",
    "banana",
    "lemon"
]
//console.log(arr)
//console.log(typeof arr)
arr = []
arr[0] = "black"
arr[1] = "blue"
arr[2] = "red"
arr[100] = "97 values empty the value assign in hundredh palce" // the fourth value will be hundred 97 value are empty 
//console.log(arr)
//console.log(arr.length) // length also will be 101 😨
let co = arr[0] // The Black in the color value
//console.log(color)
arr_[2] = "mango"  // also change the value
//console.log(arr_)

// Array to changer the String -------------------------------------->
const str = arr_.toString() //Output ---> apple,mango,banana
//console.log(a)
const obj = {
    f_name:"john",
    s_name:"Doe",
    age:21,

}
//Array Also assign the Object Values
const myArray = [] 
myArray[0] = obj.f_name
myArray[1] = obj.s_name
myArray[2] = obj.age
//console.log(myArray)

//length ----> return the number of elements
//sort() -----> Sorts the array
let a = arr_.length
a = arr_.sort()  // Order By Alphabet 
//console.log(l)

// Get First element and last element in the array
a = arr_[0] // first element
a = arr_[arr_.length-1] // get last 
a = arr_[(arr_.length-1)/2] // get middle element
//console.log(a)
//console.log(arr_)

// looping Array element 
let loop_val = ""
for(let i = 0;i < arr_.length;i++){
    loop_val += arr_[i] + "\n"
}
//console.log(loop_val)
                                    // both ar same
//forEach() method in js
let txt = ""  // txt inisialetions is first next declare the forEach
arr_.forEach(print);
function print(val){
    txt += val + "\n"
}
//console.log(txt)

//Array create also use to new keybord ------>>>>>
arr = new Array(1,23,31,18,87,76,87) // also array type is Object 
a = new Array() // empty Array 
a = new Array(3) // you give the single value that is size of array [] empty array in length 3
//console.log(arr)
//console.log(a)
//console.log(a.length)

// Array or not 
a = Array.isArray(arr) // return the boolean value 
//console.log(a)
// Array Inbuild Methods------------------------------------------------>>>>>>>>
/**
  length
  toString()
  join()  
  pop()      >>> Remove Last  
  push(Values)     >>> add last
  shift()    >>> Remove first 
  unshift(valuse)  >>> add first
    
  delete()
  concat(array1,array2,..etc)
  flat()
  splice(start_index,delete_count,adding value1,value2,.....etc)
  slice(start,end)
*/

//length
let colors = ["orange","black","blue","red","violet","yellow"]
arr = colors.length
//console.log(arr)

//toString()
arr = colors.toString()
//console.log(arr) 

//join()
arr = colors.join(" > ") //output ---> black > blue > red > violet > yellow
//console.log(arr)

//pop()
arr = colors.pop() //yellow removed in last position
//console.log(colors);

//push()
arr = colors.push("gray") // add gray in last position
//console.log(colors)

//shift()
arr = colors.shift() // remove orange in fist position
//console.log(colors) 

//umshift()
arr = colors.unshift("aqua")
//console.log(colors)

// adding new elmenet in this method 
colors[colors.length] = "green"
//console.log(colors)

//delete()
delete colors[0]; // use the delete the value will be empty are undefined
//console.log(colors);

//concat() >>> Multipel Arrays are joining are concat
const n = ["ram","kumar","sakthi","vel"]
const m = [2,1,3,6]
arr = colors.concat(n,m) // Join the two Arrays
arr_ = colors.concat(1,2,3) //also passing the values
//console.log(arr) 
//console.log(arr_)

//Multi Diamension Array
const mul = [[1,2,3,6],["a","b","c","d"],["aa","bb"]]
arr = mul[1][2] 
//console.log(arr)

//flot()
// multi diamesional array join in single array
arr = mul.flat()
//console.log(arr)

//splice(start_index.delete_count,add value,...etc)
arr = colors.splice(0,1,"pink","yellow")
arr = colors.splice(6,2)
//console.log(colors)

//slice
arr = colors.slice(3) // 3 after getting the value
arr = colors.slice(0,4) // 0-3 is get it and show
//console.log(arr)


// Array Sortting Methods()

/*
  // Alpabetic Sort                             // Number Sort
  sort()                                        Numberic sort       
  reverse()                                     Random Sort
  Sorting Object                               

 */

 //sort()
arr = ['banana','orange','mango','apple']
a = arr.sort()
//console.log(a) // ascending order will assign

//reverse()
// give an array values are reverse 
a = arr.reverse()
//console.log(a)

// Number Sort 
// also use sort but sort(()=>(a-b)) use the formula
arr = [12,3,32,66,7,87,9,28,78,] 
a = arr.sort() //is not working 
a = arr.sort((a,b)=>(a-b)) // you will be get the correct output
a = arr.sort((a,b)=>(b-a)) // you get descending order output
//console.log(a)

//random() random assign the value 
//Array value random to assign
a = arr.sort(()=>(0.6 - Math.random()))
//console.log(a)

//find max and min value
a = Math.max(...arr)
//       or
a = Math.max.apply(null,arr)
a = Math.min(...arr)
//      or
a = Math.min.apply(null,arr)
//console.log(a)


//Array Iteration methods()

/**
  forEach()
  map()
  filter()
  reduce()
  reduceRight()
  every()
  some()
  from()
  keys()
  entries()
  with()
  spread() 
 */


//forEach()
arr = [1,2,3,6,7,8,9,]
txt = ""
let myfunction = (value,index,array) =>{
    txt += value + "\n"
} 
arr.forEach(myfunction)
//console.log(txt)

//map()
a = arr.map(e=>(e*2))
//console.log(a)

//filter()
// filter is find the all values 
a = arr.filter(e =>(e>3))
//console.log(a)

// reduce()
// this is sum of the array is not working in every time
a = arr.reduce((total,value,index)=>(total+value))
//console.log(a)
//console.log(num)

//some()     
// this is return the true ara false value
a = arr.some(e =>(e>3))
console.log(a)
