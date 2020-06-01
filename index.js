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
    },
    {
        type: "input",
        name: "title",
        message: "What is the projects title?"
    },
    {
        type: "input",
        name: "Description",
        message: "Please write a short description."
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
        message: "What commands to run to install dependencies?"
    },

    {
        type: "input",
        name: "Tests",
        message: "What commands to run a test?"
    },
    {
        type: "input",
        name: "Usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "Contributing",
        message: "What does the user need to know about who is contributing to the repo?"
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) { return console.log(err); }
        console.log("You got it Girl!");
    });

}

function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("README.md", util(answers));
    })
}

init();
