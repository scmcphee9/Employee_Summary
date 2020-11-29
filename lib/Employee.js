const inquirer = require("inquirer");

// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    inquirer
      .prompt({
        type: "input",
        message: "What is the name of employee?",
        name: "name",
      })
      .then((response) => {
        return (this.name = response);
      });
  }

  getId() {
    inquirer
      .prompt({
        type: "list",
        message: "What is your employees title?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "id",
      })
      .then((response) => {
        return (this.id = response);
      });
  }

  getEmail() {
    inquirer
      .prompt({
        type: "input",
        message: "What is your employees Email?",
        name: "email",
      })
      .then((response) => {
        return (this.email = response);
      });
  }

  getRole() {
    return console.log("Employee");
  }
}

module.exports = Employee;
