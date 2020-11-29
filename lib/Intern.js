// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inqurer = require("inquirer");
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(school) {
    this.school = school;

    super(name, "Intern", email);
  }

  getSchool() {
    inquirer
      .prompt({
        type: "input",
        message: "What is the school this employee attends?",
        name: "school",
      })
      .then((response) => {
        return (this.school = response);
      });
  }

  getRole() {
    return console.log(`${this.id}`);
  }
}

module.exports = Intern;
