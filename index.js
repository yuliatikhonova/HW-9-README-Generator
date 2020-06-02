const fs = require("fs");
const inquirer = require("inquirer");
const util = require("./utils/generateMarkdown");


const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your Github username?",
        default: "yuliatikhonova"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        default: "yuliatikhonova@outlook.com"
    },
    {
        type: "input",
        name: "URL",
        message: "What is the URL for your project?",
        default: "https://github.com/yuliatikhonova/HW-9-README-Generator"
    },
    {
        type: "input",
        name: "title",
        message: "What is the projects title?",
        default: "Read me Generator"
    },
    {
        type: "input",
        name: "Description",
        message: "Please write a short description.",
        default: " For this project we were suppose to create a command-line application that dynamically generates a README.md from a user's input. When you type in the command node index.js it will prompt you through a series of questions that the answers are going to creat the README."
    },
    {
        type: "list",
        name: "License",
        message: "What license dose your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3.0", "None"]
    },
    {
        type: "input",
        name: "Installation",
        message: "What commands to run to install dependencies?",
        default: "npm i"
    },

    {
        type: "input",
        name: "Tests",
        message: "What commands to run a test?",
        default: "npm run test"
    },
    {
        type: "input",
        name: "Usage",
        message: "What does the user need to know about using the repo?",
        default: " When you type in node index.js into the terminal, the questions and answers will dynamically create the ReadMe. "
    },
    {
        type: "input",
        name: "Contributing",
        message: "What does the user need to know about who is contributing to the repo?",
        default: "There was only one contributor in this project"
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) { return console.log(err); }
        console.log("You got it Girl or Boy!");
    });

}

function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("README.md", util(answers));
    })
}

init();
