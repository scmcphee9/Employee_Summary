// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

// getRole() {
//   return console.log("Engineer");
// }
module.exports = Engineer;

// // TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// const inqurer = require("inquirer");

// const engineerQuestions = [
//   {
//     type: "input",
//     message: "What is the Github username of this employee?",
//     name: "gitHub",
//   },
// ];

// class Engineer extends Employee {
//   constructor(name, id, email, gitHub) {
//     this.gitHub = gitHub;
//     super(name, id, email);
//   }

//   getEngineer() {
//     inquirer.prompt(engineerQuestions).then((response) => {
//       return (this.gitHub = response);
//     });
//   }

//   // getRole() {
//   //   return console.log("Engineer");
//   // }
// }

// module.exports = Engineer;
