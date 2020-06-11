# Good README Generator

A javascript command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:

```bash
node index.js
```

Once invoqued the application will ask the following:

```bash
? Enter your GitHub username: "your GitHub user"
? Enter your Repository name: "your repo name"
```
If a valid GitHub User and repository name is introduced the terminal will log:

```bash
README file genrated succesfully!
```
The README.md file will be generated in the root folder.

## Coding summary

for this project 3 dependencies are used: "fs", "inquirer" & "axios" as well as a additional JS file whre the function to create the structure of the README.md 

the general code structure is presented below.

```js
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer.prompt([
"Prompts in Terminal"
]) 
.then(function(){
     axios.get(queryUrl).then(function (response) {
      "catching the response from API"
      fs.writeFile("README.md", generateMarkdown(repoNames), function (err) {
        "generating a file"
      });
    });
})

```

### Inquirer

Used to get prompts in the Terminal which store the values in variabes to be used later in the API call

```js
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
   "here the code that will generate and save the file"
  });
```
### Axios

Axios help us to make the GitHub API call to the specific repository and returning a promise with the API response 

```js
 const queryUrl = `https://api.github.com/repos/${response.github}/${response.repoName}`;

    axios.get(queryUrl).then(function (res) {
      const repoNames = res.data;
      
    });
```

### fs

fs help us to write and create the file after all the information is consolidated

```js
fs.writeFile("README.md", generateMarkdown(repoNames), function (err) {
        if (err) {
          throw err;
        }

        console.log(`README file genrated succesfully!`);
      });
```
### Generate the README file structure

Catching the response of the API is only half of the job, the rest is arrange the information in a format that is readable to the user and delivers value, therefore a generateMarkdown function is created to take specific info form the response object from the API and placing in specific portions of the file using template literals.
#### Template Literals
emplate literals are string literals that can stretch across multiple lines and include interpolated expressions (inserted via ${···}):

in this project the template created is:

```js
`
 # Project title: ${data.name}
  ## Owner: ${data.owner.login}
  ![](${data.owner.avatar_url})
  ## Description:
  Here you can find the description of the project as uploaded in the GitHub project: ${data.description}
  ## Badges
  [![Last Commit](https://img.shields.io/github/last-commit/${data.owner.login}/${data.name})](https://github.com/${data.owner.login}/${data.name})
  [![Commit Activity](https://img.shields.io/github/commit-activity/y/${data.owner.login}/${data.name})](https://github.com/${data.owner.login}/${data.name})
  [![Contributors](https://img.shields.io/github/contributors/${data.owner.login}/${data.name})](https://github.com/${data.owner.login}/${data.name}/graphs/contributors)
  ## Installation
  This Project runs on GitHub pages
  ## License
  License of this GitHub repository ${data.license}
    ## Contributing
  Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
  ## Test
  Test contribution is welcome for this repository
  ## Questions
  If any question contact: [${data.owner.login}](${data.owner.html_url})
`
```

### Summary
The most difficult part of this project is to get and read all the documentation to generate a good formated README file and then generate tags and coding sections, once that was clear the programing was straight forward.
