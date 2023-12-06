// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is your project name?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license should your project have? (Choose one)',
        choices: ['Apache2', 'MIT', 'GNUGPLv3', 'GNUGPLv2', 'ISC']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should run to install dependencies?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be ran to run tests?'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('README file created successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput));
        });
};

// Function call to initialize app
init();
