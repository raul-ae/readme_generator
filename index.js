// adding the dependencies for the functions required to execute "fs", "axios" & "inquirer"

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

// requiring the file generateMarkdown to call the file structure function
var markdown = require("./utils/generateMarkdown.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Starting inquirer to get prompts in the terminal to get GitHub user and project name
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter your GitHub username",
      name: "github",
    },
    {
      type: "input",
      message: "Enter your Repository name",
      name: "repoName",
    },
  ])
  .then(function (response) {
    const queryUrl = `https://api.github.com/repos/${response.github}/${response.repoName}`;

    axios.get(queryUrl).then(function (res) {
      const repoNames = res.data;
      fs.writeFile("README.md", generateMarkdown(repoNames), function (err) {
        if (err) {
          throw err;
        }

        console.log(`README file genrated succesfully!`);
      });
    });
  });

const questions = [];

function writeToFile(fileName, data) {}

function init() {}

init();
