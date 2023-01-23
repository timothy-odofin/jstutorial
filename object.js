const employee ={firstName: 'Oyejide', lastName: "Odofin", age: 10, phone: "09393847783", email: "odofin@swipe.ng",
                 address:{houseNo: 23, street: "Muniratu cook", state: "Ogun", city: "Abeokut", postalcode: 1102938}}

//Address houseNo, street, state, city, postalcode
console.log(employee.firstName)
console.log(employee["age"])
console.log(employee["address"]["state"]) // same as console.log(employee.address.state)

const student ={firstName: 'Oyejide', lastName: "Odofin", age: 10, phone: "09393847783",
                 department:{ name: "LIT", location: "Boso", school: "School of Science", hod: "Adebola John",
                faculty: {name: "Faculty of Science", dean: "Aliyu Mohammed", facultyPhone: "093938"}}}

                console.log("################################# Object inside another Object####################")
console.log(student.firstName)
console.log(student.department.name) // print LIT
console.log(student.department.faculty.name) // print Faculty of Science
