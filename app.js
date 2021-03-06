const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// inquirer questions to prompt in command line
const managerQuestions = [
  {
    type: "input",
    message:
      "As manager, enter the following information, and select employees.\nWhat is your name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is your employee ID number?",
    name: "managerId",
  },
  {
    type: "input",
    message: "What is your Email?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "officeNumber",
  },
  {
    type: "list",
    message: "What type of employee would you like to add?",
    choices: ["Engineer", "Intern", "None"],
    name: "position",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is the name of the intern?",
    name: "internName",
  },
  {
    type: "input",
    message: "What is the employee ID number?",
    name: "internId",
  },
  {
    type: "input",
    message: "What is your employees Email?",
    name: "internEmail",
  },
  {
    type: "input",
    message: "What school does your intern attend?",
    name: "school",
  },
];
const engineerQuestions = [
  {
    type: "input",
    message: "What is the name of the engineer?",
    name: "engName",
  },
  {
    type: "input",
    message: "What is this employees ID number?",
    name: "engId",
  },
  {
    type: "input",
    message: "What is this employees Email?",
    name: "engEmail",
  },
  {
    type: "input",
    message: "What is this employees GitHub username?",
    name: "github",
  },
];

// empty arrays to collect your newly created positions
const managers = [];
const engineers = [];
const interns = [];
const employees = [];

const getManagerInfo = () => {
  inquirer.prompt(managerQuestions).then((response) => {
    const manager = new Manager(
      response.managerName,
      response.managerId,
      response.managerEmail,
      response.officeNumber
    );
    managers.push(manager);
    // if statement to prompt engineer, intern or write file function
    if (response.position === "Engineer") {
      inquirer.prompt(engineerQuestions).then((response) => {
        const engineer = new Engineer(
          response.engName,
          response.engId,
          response.engEmail,
          response.github
        );

        engineers.push(engineer);

        reAsk();
      });
    } else if (response.position === "Intern") {
      inquirer.prompt(internQuestions).then((response) => {
        const intern = new Intern(
          response.internName,
          response.internId,
          response.internEmail,
          response.school
        );
        interns.push(intern);

        reAsk();
      });
    } else {
      // pushes arrays all to one array called employees
      Array.prototype.push.apply(employees, managers);
      Array.prototype.push.apply(employees, engineers);
      Array.prototype.push.apply(employees, interns);
      // console.log(employees);
      writeToFile(employees);
    }
  });
};

// questions to reask question for engineer or intern
const reAskQuestions = [
  {
    type: "list",
    message: "What type of employee would you like to add?",
    choices: ["Engineer", "Intern", "None"],
    name: "position",
  },
];

// function to reask for as many positions needed
const reAsk = () => {
  inquirer.prompt(reAskQuestions).then((response) => {
    if (response.position === "Engineer") {
      inquirer.prompt(engineerQuestions).then((response) => {
        const engineer = new Engineer(
          response.engName,
          response.engId,
          response.engEmail,
          response.github
        );

        engineers.push(engineer);
        reAsk();
      });
    } else if (response.position === "Intern") {
      inquirer.prompt(internQuestions).then((response) => {
        const intern = new Intern(
          response.internName,
          response.internId,
          response.internEmail,
          response.school
        );
        interns.push(intern);
        reAsk();
      });
    } else {
      Array.prototype.push.apply(employees, managers);
      Array.prototype.push.apply(employees, engineers);
      Array.prototype.push.apply(employees, interns);
      // console.log(employees);
      writeToFile(employees);
    }
  });
};

// writes the file
function writeToFile(data) {
  return fs.writeFile("./output/team.html", render(data), () =>
    console.log("Success!")
  );
}

// starts function to kickoff your manager information
getManagerInfo();
