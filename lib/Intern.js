//  Extend Employee parent class
const Employee = require('./Employee')

// In addition to Employee's properties and methods, Intern will also have:
// school
// getSchool()
// getRole() // Overridden to return 'Intern'

module.exports = class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return 'Intern'
    }
}



