var fs = require('fs');
var inquirer = require('inquirer');

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const Directory = path.resolve(__dirname, "dist");
const distPathway = path.join(Directory, "index.html");

const generateHTML = require("./Assets/js/htmlGen.js");

const employeeArray = [];
const idArray = [];

function startUp() {
    console.log('Welcome to the team builder. Fill out everything below')
};

function managerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            name: "managersName",
            message: "Please input your managers name",
            validate: (answer) => {
                if(answer) {
                    return true;
                } else {
                    console.log("please input your managers name");
                    return false;
                }
            },
        },

        {
            type: "input",
          name: "managerID",
          message: "What is the manager's ID number?",
          validate: (answer) => {
            let validAnswer = answer.match(/^[1-9]\d*$/);
            if (validAnswer) {
              return true;
            } else {
              return "Please input a number greater than zero";
            }
          },
        },

        {
            type: "input",
            name: "managerEmail",
            message: "Please enter your manager's email",
            validate: (answer) => {
              let validAnswer = answer.match(/\S+@\S+\.\S+/);
              if (validAnswer) {
                return true;
              } else {
                return "Please enter a valid email";
              }
            },
        },

        {
            type: "input",
          name: "managerOfficeNumber",
          message: "Please enter your manager's office number.",
          validate: (validAnswer) =>
            validAnswer
              ? true
              : () => {
                  console.log("Enter valid employee name");
                  return false;
                },
        },
        
    ])

    .then((answers) => {
        const manager = new Manager(
            answers.managerName,
            answers.managerID,
            answers.managerEmail,
            answers.managerOfficeNumber
        );

        employeeArray.push(manager);
        idArray.push(answers.managerID);

        nextEmployee();
    });

    function nextEmployee() {
        inquirer
        .prompt([
          {
            type: "list",
            name: "memberChoice",
            message: "Which team member would you like to add?",
            choices: [
              "Engineer",
              "Intern",
              "There are no more team members.",
            ],
          },
        ])

        .then((userChoice) => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    renderTeam();
            }
        });
    }
    
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
          name: "engineerName",
          message: "Please enter the Engineers name",
          validate: (validAnswer) =>
            validAnswer
              ? true
              : () => {
                  console.log("Enter valid employee name");
                  return false;
                },
            },

            {
                type: 'input',
                name: 'engineerID',
                message: 'Please enter the Engineers ID',
                validate: (answer) => {
                  const pass = answer.match(/^[1-9]\d*$/);
                  if (pass) {
                    if (idArray.includes(answer)) {
                      return 'Please input a different ID, this one is already taken';
                    } else {
                      return true;
                    }
                  }
                  return 'Please enter a number greater than zero.';
                }
            },

            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Please enter the Engineers email address',
                validAnswer: (validEmail) => {
                  const emailValid = validEmail.match(/\S+@\S+\.\S+/);
                  const valid = emailValid ? true : () => 
                  console.log("Enter valid email");
                }
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "Please enter the Engineers Github username",
                validate: (userName) => {
                if (userName) {
                    return true;
                } else {
                console.log(" Enter the correct GitHub username");
                    }
                },
            },
        ])

        
    }

};