// The first class is an Employee parent class with these properties & methods.
// create the class

// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()  which returns 'Employee'

module.exports = class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee'
    }
}




// although it’s not a requirement, consider adding validation to ensure
// that user input provided is in the proper expected format.