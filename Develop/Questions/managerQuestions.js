//Function to call inquirer questions for manager.

const inquirer = require("inquirer");

function managerQuestions (){
    return inquirer
    .prompt([
        {
            type: "input",
            message: "What is your manager's name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is your manager's email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is your manager's office number?",
            name: "officeNumber"
        },
    ])
}

module.exports = managerQuestions;
