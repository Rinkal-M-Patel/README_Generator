const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of your project?",
      },
      {
        type: "input",
        name: "installation",
        message: "what are the installation instructions of your project?",
      },
      {
        type: "input",
        name: "usage",
        message: "what are the usage of your project?",
      },
      {
        type: "input",
        name: "contributing",
        message: "contribution of this project",
      },
      {
        type: "input",
        name: "tests",
        message: "Provide test instructions of your project..",
      },
      {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["MIT", "Apache 2.0", "GNU GPL v3", "None"],
      },
];

// function to write README file
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, data);
        console.log("README file generated successfully!");
      } catch (err) {
        console.error("Error while generating README file:", err);
      }
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        const markdown = generateMarkdown(responses);
        const readmeFilePath = path.join(__dirname,"utils", "generated-README.md");
        writeToFile(readmeFilePath, markdown);
      });
}

// function call to initialize program
init();
