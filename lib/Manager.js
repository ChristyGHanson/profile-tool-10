//  Extend Employee parent class
const Employee = require('./Employee')

module.exports = class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        // Added office number.
        this.officeNumber = this.officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() { // Role is 'Manager'.
        return 'Manager'
    }
}






// although it’s not a requirement, consider adding validation to ensure
// that user input provided is in the proper expected format.