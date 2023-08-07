// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please add Github Repo URL',
        name: 'Repo',
    },
    {
        type: 'input',
        message: "What is the name of your project?",
        name: 'title',
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'Description',
    },
    {
        type: 'input',
        message: "Add a Table of Contents",
        name: 'Table of Contents',
    },
    {
        type: 'input',
        message: "Describe the steps on how to install your project",
        name: 'Install',
    },
    {
        type: 'input',
        message: "Provide instructions for your project here",
        name: 'Instructions',
    },
    {
        type: 'input',
        message: "Provide examples for your project here",
        name: 'Examples',
    },
    {
        type: 'input',
        message: "Add any contributors, developers or outside sources for your project here",
        name: 'Contributors',
    },
    {
        type: 'input',
        message: "Add your instructions for running tests on your project here",
        name: 'Test',
    },
    {
        type: 'checkbox',
        message: "Choose your preferred license",
        name: 'Licenses',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'The Unlicense'],
    },
    {
        type: 'input',
        message: "Add your email address here for anyone with additional questions",
        name: 'Email',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating a Readme.md ");
        writeToFile("./dist/README.md", generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();

