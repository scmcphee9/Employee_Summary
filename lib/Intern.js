// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;

// // TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// const inqurer = require("inquirer");
// const Employee = require("./Employee");

// const internQuestions = [
//   {
//     type: "input",
//     message: "What is the school this employee attends?",
//     name: "school",
//   },
// ];

// class Intern extends Employee {
//   constructor(name, id, email, school) {
//     this.school = school;

//     super(name, id, email);
//   }

//   getIntern() {
//     inquirer.prompt(internQuestions).then((response) => {
//       return (this.school = response);
//     });
//   }

//   // getRole() {
//   //   return console.log("Intern");
//   // }
// }

// module.exports = Intern;
