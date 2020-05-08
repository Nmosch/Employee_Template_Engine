const inquirer = require("inquirer");
const managerQuestions = require("./managerQuestions");
const engineerQuestions = require("./engineerQuestions");
const internQuestions = require("./internQuestions");
const render = require("../lib/htmlRenderer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "../output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//initialing function to call all questions.

function initialQuestion(employees, id, Manager, Engineer, Intern) {
    return inquirer
//allows user to select employee to update
        .prompt([{
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "teamMember",
            choices: ["Manager", "Engineer", "Intern", "I don't want to need another team member"],
        }])
        .then((answer) => {
            let choice = answer.teamMember;
//switch based on which employee type chosen
            switch (choice) {
                case "Manager":
                    managerQuestions().then(input => {
                        const { managerName, managerEmail, officeNumber } = input;
                        const manager = new Manager(managerName, id++, managerEmail, officeNumber);
//push to global employee array
                        employees.push(manager);
                        console.log(employees);
//recursion function for questions to reload
                        initialQuestion(employees, id, Manager, Engineer, Intern);
                    })
                    break;
                case "Engineer":
                    engineerQuestions().then(input => {
                        const { engineerName, engineerEmail, engineerGithub } = input;
                        const engineer = new Engineer(engineerName, id++, engineerEmail, engineerGithub);
                        employees.push(engineer);
                        console.log(employees);
                        initialQuestion(employees, id, Manager, Engineer, Intern)
                    });
                    break;
                case "Intern":
                    internQuestions().then(input => {
                        const { internName, internEmail, internSchool } = input;
                        const intern = new Intern(internName, id++, internEmail, internSchool);
                        employees.push(intern);
                        console.log(employees);
                        initialQuestion(employees, id, Manager, Engineer, Intern)
                    });
                    break;
                default:
//renders final html file
                const finalRender = render(employees)
                fs.writeFile(outputPath, finalRender, function(err){
                    if(err){
                        throw err;
                    }
                    console.log("Success");
                });
                    break
            }
        })
}

module.exports = initialQuestion;