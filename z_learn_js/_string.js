"use strict";

// String 
// Number to change String otString() method
let str = "shan"
let str1 = new String("shan")
let str2 = new String("shan")

//console.log(typeof str, typeof str1)

//console.log(" Double == Only compare the values ",str==str1);

//console.log("Object String " ,str1 == str2)
//console.log("Triple === compare the value and data type",str2===str1)


//String Method  in JavaScript ---------------------------------------------------------------->>>

/*
  length
  slice(start,end)
  substring(start,end)
  substr(start,length)
  replace(repleceble,replace) this just work in first element 
  replaceAll(replaceble,replace)
  toUpperCase()
  toLowerCase()
  trim()
  trimStart()
  trimEnd()
  pasStart(added_times,added_values) EX (3,"a") ---->> aaHello World
  padEnd(added_times,added_values)
  charAt(index_value_based)
  charCodeAt( index_value || value )
  split(oneargunment)
*/ 

let name_str = "abcdfghijklmnopqrstuvwxyz"
let x = name_str.length
//console.log("Length",x)
//x = name_str.slice(0,3)
// All Are similar
// slice(start,end) 
//substing(start,end)
//substr(start,length) 

x = name_str.slice(-7)
//console.log(x)
x = name_str.substr(6,3)
//console.log(x)
x = name_str.substring(0,3)
//console.log(x)

let val_str  = "heiio  dorid"
//console.log(val_str.replace("d","w"))
//console.log(val_str.replaceAll("i","l"))
//console.log(val_str.replace(val_str.slice(6),"world"));

let upper = 'string javascript'
let lower = 'INBUILD METHODS()'
x = upper.toUpperCase()
//console.log(x);
x = lower.toLowerCase()
//console.log(x)
//charAt -----> getting by the index value
x = upper.charAt(2) 
x = upper.charCodeAt(7) //----> get the charater uniqe code
//console.log(x)
//concat 
x = upper.concat(" -----> ",lower)
//console.log(x)
// trim is removing whitespace 
let txt = " Hello World "
x = txt.trimStart()
x = txt.trim()
//console.log(txt.length,x.length)

let pad = "x";
x = pad.padStart(6,"a") // output ---->> (n-1) add ("a") aaaaax
x = pad.padEnd(3,"a") // output ---->> (n-1) add ("a") xaa
//console.log(x)

//split()
let ltr = "hello World"
//console.log(ltr.split(""))
//console.log(ltr.split(" "))
//console.log(ltr.split("l"))
//console.log(ltr.split("o"))


// String Search Methods() ------------------------------------------------------------------>>>

/* 
  indxOf(value) --->> Index value start's with 0(zero)
  lastIndexOf(value)
  search(value) --->> value in the place  
  match(/value/) --->> its working in Regexp
  includes(values) --->> return boolean value and it's Case sensitive
  startsWith(values) --->>            ,, 
  endsWith(values) --->>              ,,
  startsWith(values,place) --->> not index based values
  endsWith(values,place) --->> not index based values
*/

//indexof() && lastIndexOf()
let index =  "Hello World"
x = index.indexOf("l")
x = index.lastIndexOf("l")
//console.log(x)
x = index.search("o")
//console.log(x)
x = index.match(/l/g)
//x = index.matchAll(/hello/gi)
//console.log(x)
//includes
x = index.includes("Hello")
//console.log(x)
x = index.startsWith("Hl")
x = index.startsWith("W",6)
x = index.endsWith("d")
x = index.endsWith("o",5)
//console.log(x)

//Number To String -------------------------------------------------------->
// toString() method
str = 20
x = str.toString()
//console.log(typeof str)
//console.log(typeof x)


