//  Extend Employee parent class
const Employee = require('./Employee')

// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'

module.exports = class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return 'Engineer'
    }
}





// although it’s not a requirement, consider adding validation to ensure
// that user input provided is in the proper expected format.