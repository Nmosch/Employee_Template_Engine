const internQuestions = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is your intern's id?",
        name: "internId"
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
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "teamMember",
        choices: ["Engineer", "Intern", "I don't want to need another team member"],
    }
]

module.exports = internQuestions