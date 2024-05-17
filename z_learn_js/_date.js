// JavaScript Have A Date Format 

//Use date
//get The Corrent Date
let d  =  new Date()
//console.log(d) 

// You give Date to change date format
//Types
d = new Date('2012-12-12')
d = new Date("12/12/12")
d = new Date('03-06-2002')
d = new Date('06-12-20')
d = new Date('mar 22 2018')
//console.log(d)



// String to Format giev an Date  
d = new Date("june 19,2002 06:16:28")
//console.log(d)

//Number Format follow  the order in Give an Date
//new Date(year,month,day,hours,minutes,secounds,milliseconds) 
// new Date(milliesecounds)

// Notes ----------->> The Month is Start with 0 jan-0 ,Dec-11 

d =  new Date(2002,6,19,10,16,0)
//console.log(d)

//You give an Date in two digits that is takes 19xx
d = new Date(87,9,29)
//console.log(d)

//you give the milliseconds also 
// The millieseconds start form 1970 
d = new Date(1000000000000)
//console.log(d)

//You don't No the Milliseconds start
//give 0
d = new Date(0) //The millisecond staring year
//console.log(d)

//date to  get the milliseconds using Date.parse()
d = Date.parse("2002/06/19") // this date ms is --->>> 1024425000000
//console.log(d)

//Date methods()

/**
 * toString()
 * toDateString()
 * toUTcString()
 * toISOString()
 */

//toString
d = new Date()
a = d.toString()  // ---->>> Fri Dec 29 2023 22:02:19 GMT+0530 (India Standard Time)
//console.log(a)

//toDateString
a = d.toDateString() // ---->>> Fri Dec 29 2023
//console.log(a)

//toUTCString
a = d.toUTCString() // ------>>> Fri, 29 Dec 2023 16:34:25 GMT
//console.log(a)

//toISOString
a = d.toISOString() // ------>>> 2023-12-29T16:34:25.802Z
//console.log(a)

//Date Get Methods()                                     // Date set Methods()

/**
 * getFullYear()                                        * setFullYear()              
 * getMonth()                                           * serMonth()
 * getDate()                                            * serDate()
 * getDay()
 * getHours()                                           * serHours()
 * getMinutes()                                         * serMinutes()
 * getSeconds()                                         * serSeconds()
 * getMillisconds()
 * getTime() // return value in milliseeconds
 */

//Note :- Month,Day 0 is the index value 

const Months = ['January','February','March','April','May','June','July','August','September','October','November','December']

d =  new Date('2002-06-19')
a = Months[d.getMonth()]
//console.log(d.getFullYear(),a,d.getDate(),d.getDay(),d.getHours(),d.getMinutes(),d.getSeconds(),d.getMilliseconds())
//console.log(d.getTime()) 

//Corret Date in milliseconds
d = Date.now() // 1703869802354
//console.log(d)


//setDate Methods 
d = new Date('2002-06-19')
d.setFullYear(d.getFullYear()+4)+d.setMonth(d.getMonth()+1)+d.setDate(d.getDate()-4)
//console.log(d.toDateString()) 



