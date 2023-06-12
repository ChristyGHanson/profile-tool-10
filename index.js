//This downloads Inquirer.
// when app starts add a manager
//then follow with what you want the user to do next. 
const inquirer = require('inquirer');
const fs = require('fs');
const utilsFile = require('./utils/utils-file.js')

let team = [];

// employee ID, email address, and office number
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
            //engineer or an intern or to finish building my team
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

// get everything to line up.
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

// data sends the data to this function. this function evaluates data.

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

// generate dynamic html inside this function.
//build a for loop, etc. whatever i want. It needs to output some html to put into the string on 189.
// div, h3 person's name, biographical info. loop gneerates a specific string. 
// adding person's info to the string. have a long string ready. 
//Figure out how it will be set up. we have the data. focus on the front end. reference Module10.
// make a spot for each team member. 

function finishTeam() {
    console.log('Finish building the team')
    console.log(team)
    // Create a 'for' loop. Write some HTML blocks inside a template literal. Using backticks. Inside it, access person's name. Access that information inside array. ${team.name}, ${team.email}
    // That code is inside the for loop. Regardless of how long it is, the loop will run for however many team members I have. Create the same html code for each team members. 
};

function init() {
    addManager();
};

init();

//when the team is finished being built, the html file has to be generated using js.
//have the html file built out with the appropriate fields.

// 


