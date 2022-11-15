

function Employee(name=""){
    this.name = name; 
    this.id = Math.floor(Math.random() * 10 - 4);
    this.email = "anyemail@gmail.com";
    this.role = "employee";

    
    this.getName = function(){
        return this.name;
    }

    this.getId = function(){
        return this.id;
    }

    this.getEmail = function(){
        return this.email;
    }

    this.getRole = function(){
        return "employee";
    }
}

Employee.prototype.getInfo = function(){
    return {
        name: this.name,
        id: this.id,
        email: this.email,
        role: this.role,
    };
}

module.exports = Employee;
   

// name:
    // id:
    // email:
    // getName()
    // getId()
    // getEmail()
    // getRole() //Returns 'Employee'

