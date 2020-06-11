var generateMarkdown = function (data) {
 
  return `
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

`;
};
module.exports = generateMarkdown;
