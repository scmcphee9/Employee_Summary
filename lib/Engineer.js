// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inqurer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(gitHub) {
    this.gitHub = gitHub;
    super(name, "Engineer", email);
  }

  getGithub() {
    inquirer
      .prompt({
        type: "input",
        message: "What is the Github username of this employee?",
        name: "gitHub",
      })
      .then((response) => {
        return (this.gitHub = response);
      });
  }

  getRole() {
    return console.log(`${this.id}`);
  }
}

module.exports = Engineer;
