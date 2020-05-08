const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const intialQuestion = require("./Questions/initialQuestion")
let id = 1;
//create a global array
const employees = [];
//calls function to begin questions and pass them into the array
intialQuestion(employees, id, Manager, Engineer, Intern);