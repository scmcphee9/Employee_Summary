// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inqurer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(gitHub) {
    this.gitHub = gitHub;
    super(name, "Engineer", email);
  }
}

module.exports = Engineer;
