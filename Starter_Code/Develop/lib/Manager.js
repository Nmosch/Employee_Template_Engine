// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require ("./Employee")

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super("Foo", 1, "test@test.com", 100);

        this.officeNumber = officeNumber;

    }
    
    getOfficeNumber(){
        return 100;
    }
    
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;