const managerQuestions = [
    {
        type: "input",
        message: "What is your manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is your manager's id?",
        name: "managerId"
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
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "teamMember",
        choices: ["Engineer", "Intern", "I don't want to need another team member"],
    }
]

module.exports = managerQuestions;
