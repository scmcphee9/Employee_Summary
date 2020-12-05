// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;

// // TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// const inqurer = require("inquirer");
// const Employee = require("./Employee");

// const managerQuestions = [
//   {
//     type: "input",
//     message: "What is the office number of this employee?",
//     name: "officeNum",
//   },
// ];

// class Manager extends Employee {
//   constructor(name, id, email, officeNum) {
//     this.officeNum = officeNum;
//     super(name, id, email);
//   }

//   getOfficeNum() {
//     inquirer.prompt(managerQuestions).then((response) => {
//       return (this.officeNum = response);
//     });
//   }

//   // getRole() {
//   //   return console.log("Manager");
//   // }
// }

// module.exports = Manager;
