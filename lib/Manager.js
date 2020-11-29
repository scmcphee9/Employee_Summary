// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inqurer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNum) {
    this.officeNum = officeNum;
    super(name, "Manager", email);
  }
}

module.exports = Manager;
