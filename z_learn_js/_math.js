// JavaSript Math Functions
// solve for the mathamtical problems

/**
 * Math.pow(val1,val2)
 * Math.ceil(val1)
 * Math.floor(val1)
 * Math.round()
 * Math.trunc()
 * Math.PI
 * Math.random()
 * Math.abs(val1)
 * Math.sqrt(val1)
 * Math.max()
 * Math.min()
 */

//Pow -->> Power
let num = Math.pow(2,6)
//console.log(num)

//ceil is -->> give value upto round EX: 2.8 = 3 , 2.3 = 3
let a = Math.ceil(3.2)
//console.log(a)

//floor is --->> give an value down to round Ex : 8.9 = 8 ,8.2 = 8 
a = Math.floor(8.9)
//console.log(a)

//round is balance level EX: 8.9 = 9 , 8.3 = 8  -->
a = Math.round(8.6)
//console.log(a)     // 9
a = Math.round(8.3)
//console.log(a)    // 8 

// trunc is remove the decimal values EX: 8.9 = 8 , 8.2 = 8
a = Math.trunc(8.3)
//console.log(a)
a = Math.trunc(8.9)
//console.log(a)
 
//PI is the give an pi value 
num = Math.PI
//console.log(num)

//abs is the given abselute value means negative value convert normal value EX: -3.2 = 3.2 
a = Math.abs(-3.2)
//console.log(a)

//sqrt mean's gieva an squerrote value
a = Math.sqrt(36) //6
//console.log(a) 

//max the give an value maximun value will be return 
const arr = [12,23,6,7,78,91,61,78,90]
a = Math.max(...arr)
//console.log(a)  

// min the given value minimum value will be return
a = Math.min(...arr)
//console.log(a)

//rendom 0-1 give the rendom values 
a = Math.random()
a = Math.random()*3 // 0-3 values will be return
a = Math.floor(Math.random()*3200) // values give an 0-3200
//console.log(a)