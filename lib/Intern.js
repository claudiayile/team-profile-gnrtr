const Employee = require('./Employee');

class Intern extends Employee {
    constructor() {
    this.role = "Intern";
    this.school = "Columbia";
}
    this.getSchool = function(){
        return this.school;
    }

    this.getRole = function(){
        if(this.role!="intern"){
        this.role = intern; 
        }

    }
}



module.exports = Intern;

// school 
// getSchool()
// getRole() //returns 'intern'