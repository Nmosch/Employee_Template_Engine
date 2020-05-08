//Function to call inquirer questions for engineer.
const inquirer = require("inquirer");

function engineerQuestions(){
    return inquirer
    .prompt([
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "engineerName"
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "engineerGithub"
        },
    ])
}

module.exports = engineerQuestions