// --- import modules ---
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
  // --- https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide --
  // -- questions include title, description, installation, usage, license, contributing, tests, email, github username
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
    // -- provide a default value with "npm install"
    default: "npm install",
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
    type: "list",
    name: "license",
    message: "Please select a license for your project.",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },
  {
    type: "input",
    name: "contribution",
    message: "How should people contribute to this project?",
    validate: (userInput) =>
      userInput
        ? true
        : (console.log(
            "Please provide contribution guidelines for your project"
          ),
          false),
  },
  {
    type: "input",
    name: "test",
    message: "Please provide test instructions for your project.",
    default: "npm test",
    validate: (userInput) =>
      userInput
        ? true
        : (console.log("Please enter the test instructions for your project"),
          false),
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address.",
    validate: (userInput) =>
    userInput
    ? true
    : (console.log("Please enter your email address"), false),
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


function writeToFile(fileName, data) {
  // --- function to write readme file ---
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log("Successfully write into the README.md!")
  );
}


//a function to initialize app
function init() {
  // --- get user input with prompted questions
  inquirer.prompt(questions).then((data) => {
    // --- create readme file
    writeToFile("sampleREADME.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
