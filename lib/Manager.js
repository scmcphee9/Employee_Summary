// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inqurer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNum) {
    this.officeNum = officeNum;
    super(name, id, email);
  }

  getOfficeNum() {
    inquirer
      .prompt({
        type: "input",
        message: "What is the office number of this employee?",
        name: "officeNum",
      })
      .then((response) => {
        return (this.officeNum = response);
      });
  }

  getRole() {
    return console.log("Manager");
  }
}

module.exports = Manager;
