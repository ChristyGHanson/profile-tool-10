//  Extend Employee parent class from the Employee.js file
const Employee = require('./Employee')

// In addition to Employee's properties and methods, Engineer will also have input for the GitHub username.
module.exports = class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        // Added GitHub.
        this.github = github
    }
    getGithub() {
        return this.github
    }
    getRole() { // role is 'Engineer'
        return 'Engineer'
    }
}


// although it’s not a requirement, consider adding validation to ensure
// that user input provided is in the proper expected format.