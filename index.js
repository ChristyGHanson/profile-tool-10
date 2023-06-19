const inquirer = require('inquirer');
const fs = require('fs');
// imported function from utils-file.js
const generateHTML = require('./utils/utils-file.js')
// Import three lib classes: Manager, Engineer, Intern.
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// Assign empty array to 'team' variable.
let team = [];

// List menu starts with adding a manager's name.
function addManager() {
    inquirer.prompt([
        {
            // Manager name field.
            type: 'input',
            message: 'Enter the manager name: ',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Email address: ',
            name: 'email'
        },

        {
            type: 'input',
            message: 'Enter ID number: ',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter office number: ',
            name: 'office'
        },

        {
            // List appears. Add engineer, add intern, or end the prompts by finishing the team.
            type: 'list',
            message: 'Select an option from the menu: ',
            name: 'menu',
            choices: ['Add engineer', 'Add intern', 'Finish building the team']
        },

    ])

        .then((data) => {
            console.log(data)
            // add data into team array.
            team.push(new Manager(data.name, data.id, data.email, data.office));
            selectOption(data);
        })
};

// 'Add engineer' option.
function addEngineer() {
    console.log('Add engineer')
    inquirer.prompt([
        {
            // generic name field.
            type: 'input',
            message: 'Enter engineer name: ',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter their email address: ',
            name: 'email'
        },

        {
            type: 'input',
            message: 'Enter their ID: ',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter their GitHub username: ',
            name: 'github'
        },

        {
            //engineer or an intern or to finish building my team
            type: 'list',
            message: 'select an option from the menu: ',
            name: 'menu',
            choices: ['Add engineer', 'Add intern', 'Finish building the team']
        },

    ])

        .then((data) => {
            console.log(data)
            // add data into team array.
            team.push(new Engineer(data.name, data.id, data.email, data.github));
            selectOption(data);
        })
};

// 'Add intern' option.
function addIntern() {
    console.log('Add intern')
    inquirer.prompt([
        {
            // generic name field.
            type: 'input',
            message: 'Enter your name: ',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter your email address: ',
            name: 'email'
        },

        {
            type: 'input',
            message: 'Enter your ID: ',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter your school: ',
            name: 'school'
        },

        {
            //engineer or an intern or to finish building team
            type: 'list',
            message: 'select an option from the menu: ',
            name: 'menu',
            choices: ['Add engineer', 'Add intern', 'Finish building the team']
        },

    ])

        .then((data) => {
            console.log(data)
            // add data into team array.
            team.push(new Intern(data.name, data.id, data.email, data.school));
            selectOption(data);
        })
};

// 'data' parameter sends the above data to this function. selectOption evaluates the data parameter.
// this function uses the let team =[]; 
function selectOption(data) {
    // team.push(data)
    //put person in the array and view data.
    if (data.menu == 'Add engineer') {
        addEngineer();
    } else if (data.menu == 'Add intern') {
        addIntern();
    } else if (data.menu == 'Finish building the team') {
        finishTeam();
    }
};


// make a spot for each team member. 
//when the team is finished being built, the html file has to be generated using js.
//have the html file built out with the appropriate fields.
function finishTeam() {
    // this will be like generateHTML
    console.log('Finished! Team will appear in the browser.');
    // send the array to the function
    generateHTML(team);

};

// run the app in command line
function init() {
    addManager();
};

init();





