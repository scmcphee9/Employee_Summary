// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;

// const inquirer = require("inquirer");

// const employeeQustions = [
//   {
//     type: "input",
//     message: "What is the name of the employee?",
//     name: "name",
//   },
//   {
//     type: "input",
//     message: "What is the employee ID number?",
//     name: "id",
//   },
//   {
//     type: "list",
//     message: "What is your employees title?",
//     choices: ["Manager", "Engineer", "Intern"],
//     name: "position",
//   },
//   {
//     type: "input",
//     message: "What is your employees Email?",
//     name: "email",
//   },
// ];
// // TODO: Write code to define and export the Employee class
// class Employee {
//   constructor(name, id, email) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//   }

//   // inquirer
//   //   .prompt()
//   //   .then((response) => {
//   //     return (this.name = response);
//   //   });

//   getEmployee() {
//     inquirer.prompt(employeeQustions).then((response) => {
//       return (this.position = response);
//     });
//   }

//   // getEmail() {
//   //   inquirer
//   //     .prompt({
//   //       type: "input",
//   //       message: "What is your employees Email?",
//   //       name: "email",
//   //     })
//   //     .then((response) => {
//   //       return (this.email = response);
//   //     });
//   // }

//   // getRole() {
//   //   return console.log(`${this.id}`);
//   // }
// }

// module.exports = Employee;

// const inquirer = require("inquirer");

// // TODO: Write code to define and export the Employee class
// class Employee {
//   constructor(name, id, email) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//   }

//   getName() {
//     inquirer
//       .prompt({
//         type: "input",
//         message: "What is the name of employee?",
//         name: "name",
//       })
//       .then((response) => {
//         return (this.name = response);
//       });
//   }

//   getId() {
//     inquirer
//       .prompt({
//         type: "input",
//         message: "What is your employees Id number?",
//         name: "id",
//       })
//       .then((response) => {
//         return (this.id = response);
//       });
//   }

//   getEmail() {
//     inquirer
//       .prompt({
//         type: "input",
//         message: "What is your employees Email?",
//         name: "email",
//       })
//       .then((response) => {
//         return (this.email = response);
//       });
//   }

//   // can we put position in function to then run that class?
//   getRole() {
//     inquirer
//       .prompt({
//         type: "list",
//         message: "What is your employees title?",
//         choices: ["Manager", "Engineer", "Intern"],
//         name: "position",
//       })
//       .then((response) => {

//         if(this.position === "Manager"){ run manager class}
//         else if(this.position === "Engineer"){run engineer class

//         }else if(this.position === intern){run intern class}

//         return this.position = response
//       });

//   }
// }

// // module.exports = Employee;
