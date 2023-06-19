//  Extend Employee parent class
const Employee = require('./Employee')

module.exports = class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        // Added office number.
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() { // Role is 'Manager'.
        return 'Manager'
    }
};

