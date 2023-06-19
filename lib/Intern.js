//  Extend Employee parent class
const Employee = require('./Employee')

// In addition to Employee's properties and methods, Intern will also have an option for 'school.'
module.exports = class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        // Added school.
        this.school = school
    }
    getSchool() {// return the school name.
        return this.school
    }
    getRole() { // role
        return 'Intern'
    }
};



