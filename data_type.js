/*
We start to explain the meaning of data type
*/

const firstName ="Oyejide"
const lastName ="Odofin"
const otherName ="Timothy"
const salary =2000.0
const age =20
const hasEntered =false
const regiterDate = new Date()
const address = undefined
const state = null
const fullName = firstName+ " "+ lastName+" "+otherName
//concatination
console.log("Full Name: "+fullName)
console.log(regiterDate)
console.log(age)
const employee ={firstName: "Funmilayo", lastName: "Odofin", otherName: "Juli", age: 19, 
salary:20000.0, hasEntered: true, regiterDate: new Date()}

//How do we access an object
const fullName2 =employee.firstName+" "+ employee.lastName+" "+ employee.otherName
console.log(fullName2)
console.log(employee.age)
//name, price, qty,datePurchased
const product ={name: "Rice", price: 40000, qty: 500, datePurchased: new Date(), model:""}
