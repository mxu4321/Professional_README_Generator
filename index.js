// TODO: Include packages needed for this application
// --- import modules ---
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
// --- https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide --    
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    //check if user input is empty
    validate: (userInput) =>
      userInput
        ? true
        : (console.log("Please enter a title for your project"), false),
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
    validate: (userInput) =>
      userInput
        ? true
        : (console.log("Please enter the description for your project"), false),
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions for your project.",
    validate: (userInput) =>
      userInput
        ? true
        : (console.log(
            "Please enter the installation instructions for your project"
          ),
          false),
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
    validate: (userInput) =>
      userInput
        ? true
        : (console.log("Please enter the usage instructions for your project"),
          false),
  },
  {
    type: "input",
    name: "contribution",
    message: "How should people contribute to this project?",
    validate: (userInput) =>
      userInput
        ? true
        : (console.log("Please provide contribution guidelines for your project"),
          false),
  },
  {
    type: "input",
    name: "test",
    message: "Please provide test instructions for your project.",
    validate: (userInput) =>
      userInput
        ? true
        : (console.log("Please enter the test instructions for your project"),
          false),
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for your project.",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your GitHub username.",
    validate: (userInput) =>
      userInput
        ? true
        : (console.log("Please enter your GitHub username"), false),
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // --- function to write readme file ---
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully write into the README.md!")
  );
}

// TODO: Create a function to initialize app
function init() {
    // --- get user input with prompted questions
  inquirer.prompt(questions);
}

// Function call to initialize app
init();
