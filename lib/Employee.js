// The first class is an Employee parent class with these properties & methods.
// create the class
module.exports = class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    } // name
    getName() {
        return this.name
    }
    getId() { // id
        return this.id
    }
    getEmail() { // email
        return this.email
    }
    getRole() { // role
        return 'Employee'
    }
};
