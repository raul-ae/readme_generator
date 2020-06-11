const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

var markdown = require("./utils/generateMarkdown.js");
// var markdown = require('./utils/generateMarkdown.js');

inquirer
    .prompt ([
        {
        type: "input",
        message: "Enter your GitHub username",
        name: "github"
        },
        {
        type: "input",
        message: "Enter your Repository name",
        name: "repoName"    
        }

    ])
    .then(function(response) {
        const queryUrl = `https://api.github.com/repos/${response.github}/${response.repoName}`;
    
        axios.get(queryUrl).then(function(res) {
        //   const repoNames = res.data
        //     console.log(repoNames);
            const repoNames = res.data;
            const repoNamesStr = JSON.stringify(repoNames)
              const repoNamesArr = repoNamesStr.split(",")
              const repoNamesString = repoNamesArr.join("\n");
              //console.log(markdown.generateMarkdown(repoNames));
          fs.writeFile("README.md", repoNamesString, function(err) {
            if (err) {
              throw err;
            }
    
            console.log(`Saved ${repoNames.length} repos`);
          });
        });
      });


const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
