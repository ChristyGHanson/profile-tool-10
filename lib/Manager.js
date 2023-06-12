//  Extend Employee parent class
const Employee = require('./Employee')

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber
// getRole()   - which is Overridden to return 'Manager'

module.exports = class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = this.officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return 'Manager'
    }
}






// although it’s not a requirement, consider adding validation to ensure
// that user input provided is in the proper expected format.