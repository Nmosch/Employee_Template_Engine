const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const intialQuestion = require("./Develop/Questions/initialQuestion")
let id = 1;
//create a global array
const employees = [];
//calls function to begin questions and pass them into the array
intialQuestion(employees, id, Manager, Engineer, Intern);