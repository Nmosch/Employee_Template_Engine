// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github){
        super("Foo", 1, "test@test.com", "GitHubUser");

        this.github = github;

    }

    getRole(){
        return "Engineer";
    }
    
    getGithub(){
        return "GitHubUser";
    }
}

module.exports = Engineer;