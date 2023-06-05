//This downloads Inquirer.
const inquirer = require('inquirer');
const fs = require('fs');
const utilsFile = require('./utils/utils-file.js')

// This is an array of questions for user input.
// This function will write content to a file.
function writeToFile(fileName, data) {
    // for(const question of data ){
    fs.writeFile(fileName, utilsFile(data), (err) => {
        if (err) {
            console.log('Sorry. Error!!! Figure out the problem', err);
            return
        }
        console.log('SUCCESS.')
    }
    )
};

function initApplication() {

    // These prompts will appear in the command line application. The user will be able to respond to these prompts.
    // Pressing the 'ENTER' key after answering each question will produce the next question in the sequence.
    inquirer.prompt([
        {
            type: 'input',
            message: 'Name of Team Manager: ',
            name: 'managername'
        },
        {
            type: 'input',
            message: 'Type a description for the project. Describe how it works.: ',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Describe how to install this program: ',
            name: 'installation'
        },
        {
            type: 'list',
            message: 'For licenses, please type one of the following (Use the UP and DOWN arrow keys. Press Enter to select the license.): ',
            name: 'license',
            choices: ['MIT', 'Apache', 'Mozilla', 'GNU', 'Boost', 'ISC']
        },
        {
            type: 'input',
            message: 'Explain which license the application is covered under.: ',
            name: 'licensenotice',
        }
    ])
        .then((data) =>
            writeToFile('index.html', data))
}

// Calling initApplication function here initializes the app.
initApplication();