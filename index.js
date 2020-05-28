const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");


const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "URL",
        message: "What is the URL for your project?"
    },
    {
        type: "input",
        name: "tittle",
        message: "What is the projects title?"
    },
    {
        type: "input",
        name: "Description",
        message: "Please write a short description."
    },
    {
        type: "input",
        name: "License",
        message: "What license dose your project have?"
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
}

function init() {

}

init();
