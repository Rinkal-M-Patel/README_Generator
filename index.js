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
        default: "My Awesome Project",
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of your project?",
        default: "A cutting-edge application that simplifies task management.",
      },
      {
        type: "input",
        name: "installation",
        message: "what are the installation instructions of your project?",
        default: "To install this project, run npm install in your terminal.",
      },
      {
        type: "input",
        name: "usage",
        message: "what are the usage of your project?",
        default: "You can use this application to create, track, and manage tasks efficiently.",
      },
      {
        type: "input",
        name: "contributing",
        message: "contribution of this project?",
        default: "Contributions are welcome! Please fork the repository and submit pull requests.",
      },
      {
        type: "input",
        name: "tests",
        message: "Provide test instructions of your project?",
        default: "To run tests, execute npm test in the project root directory.",
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
