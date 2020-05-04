const engineerQuestions = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is your engineer's id?",
        name: "engineerId"
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
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "teamMember",
        choices: ["Engineer", "Intern", "I don't want to need another team member"],
    }
]

module.exports = engineerQuestions