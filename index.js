const inquirer = require('inquirer');
const fs = require('fs');
// imported function from utils-file.js
const generateHTML = require('./utils/utils-file.js')

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
            //
            type: 'input',
            message: 'Email address: ',
            name: 'email'
        },

        {
            // 
            type: 'input',
            message: 'Enter ID number: ',
            name: 'id'
        },
        {
            //
            type: 'input',
            message: 'Enter office number: ',
            name: 'office'
        },

        {
            // List appears. Add engineer, add intern, or end the prompts by finishing the team.
            type: 'list',
            message: 'Select an option from the menu for the next teammate: ',
            name: 'menu',
            choices: ['Add engineer', 'Add intern', 'Finish building the team']
        },

    ])

        .then((data) => {
            console.log(data)
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
            //
            type: 'input',
            message: 'Enter their email address: ',
            name: 'email'
        },

        {
            // 
            type: 'input',
            message: 'Enter their ID: ',
            name: 'id'
        },
        {
            //
            type: 'input',
            message: 'Enter their GitHub username: ',
            name: 'office'
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
            //
            type: 'input',
            message: 'Enter your email address: ',
            name: 'email'
        },

        {
            // 
            type: 'input',
            message: 'Enter your ID: ',
            name: 'id'
        },
        {
            //
            type: 'input',
            message: 'Enter your school: ',
            name: 'school'
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
            selectOption(data);
        })
};

// 'data' parameter sends the above data to this function. selectOption evaluates the data parameter.
// this function uses the let team =[]; expression
function selectOption(data) {
    team.push(data)
    //put person in the array and view data.
    if (data.menu == 'Add engineer') {
        addEngineer();
    } else if (data.menu == 'Add intern') {
        addIntern();
    } else if (data.menu == 'Finish building the team') {
        finishTeam();
    }
};

// generate html inside this function.
//USE a FOR LOOP.
// It needs to output some html to put into the string on 189.
// div, h3 person's name, biographical info. loop generates a specific string. 
// adding person's info to the string. have a long string ready. 
//Figure out how it will be set up. we have the data. 
// focus on the front end. reference Module 10.
// make a spot for each team member. 
//when the team is finished being built, the html file has to be generated using js.
//have the html file built out with the appropriate fields.
function finishTeam(data) {
    console.log('Finish building the team')
    // Passing argument into the generatePage function. 
    // team array variable that was built.
    // team is now the parameter for the utils-file.js
    const result = generateHTML(data);
    console.log(result);
    // Create a 'for' loop. 
    // Write some HTML blocks inside a template literal. Using backticks. 
    // Inside it, access person's name. 
    // Access that information inside array. ${team.name}, ${team.email}
    // That code is inside the for loop. 
    // Regardless of how long it is, the loop will run for however many team members I have. 
    // Create the same html code for each team members. 
};

function init() {
    addManager();
};

init();





