//Function to call inquirer questions for intern.

const inquirer = require("inquirer");

function internQuestions(){
    return inquirer
    .prompt([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "internName"
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "internEmail"
        },
        {
            type: "input",
            message: "What school did your intern attend?",
            name: "internSchool"
        },
    ]
    )
}
module.exports = internQuestions