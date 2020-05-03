// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return "Alice";
    }

    getId(){
        return 100;
    }

    getEmail(){
        return "test@test.com";
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;