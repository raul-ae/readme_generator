var repo = {"id":271379911,"node_id":"MDEwOlJlcG9zaXRvcnkyNzEzNzk5MTE=","name":"project-1","full_name":"raul-ae/readme_generator","private":false,"owner":{"login":"raul-ae","id":61998726,"node_id":"MDQ6VXNlcjYxOTk4NzI2","avatar_url":"https://avatars1.githubusercontent.com/u/61998726?v=4","gravatar_id":"","url":"https://api.github.com/users/raul-ae","html_url":"https://github.com/raul-ae","followers_url":"https://api.github.com/users/raul-ae/followers","following_url":"https://api.github.com/users/raul-ae/following{/other_user}","gists_url":"https://api.github.com/users/raul-ae/gists{/gist_id}","starred_url":"https://api.github.com/users/raul-ae/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/raul-ae/subscriptions","organizations_url":"https://api.github.com/users/raul-ae/orgs","repos_url":"https://api.github.com/users/raul-ae/repos","events_url":"https://api.github.com/users/raul-ae/events{/privacy}","received_events_url":"https://api.github.com/users/raul-ae/received_events","type":"User","site_admin":false},"html_url":"https://github.com/raul-ae/readme_generator","description":"Create a command-line application that dynamically generates a README.md from a user's input.","fork":false,"url":"https://api.github.com/repos/raul-ae/readme_generator","forks_url":"https://api.github.com/repos/raul-ae/readme_generator/forks","keys_url":"https://api.github.com/repos/raul-ae/readme_generator/keys{/key_id}","collaborators_url":"https://api.github.com/repos/raul-ae/readme_generator/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/raul-ae/readme_generator/teams","hooks_url":"https://api.github.com/repos/raul-ae/readme_generator/hooks","issue_events_url":"https://api.github.com/repos/raul-ae/readme_generator/issues/events{/number}","events_url":"https://api.github.com/repos/raul-ae/readme_generator/events","assignees_url":"https://api.github.com/repos/raul-ae/readme_generator/assignees{/user}","branches_url":"https://api.github.com/repos/raul-ae/readme_generator/branches{/branch}","tags_url":"https://api.github.com/repos/raul-ae/readme_generator/tags","blobs_url":"https://api.github.com/repos/raul-ae/readme_generator/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/raul-ae/readme_generator/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/raul-ae/readme_generator/git/refs{/sha}","trees_url":"https://api.github.com/repos/raul-ae/readme_generator/git/trees{/sha}","statuses_url":"https://api.github.com/repos/raul-ae/readme_generator/statuses/{sha}","languages_url":"https://api.github.com/repos/raul-ae/readme_generator/languages","stargazers_url":"https://api.github.com/repos/raul-ae/readme_generator/stargazers","contributors_url":"https://api.github.com/repos/raul-ae/readme_generator/contributors","subscribers_url":"https://api.github.com/repos/raul-ae/readme_generator/subscribers","subscription_url":"https://api.github.com/repos/raul-ae/readme_generator/subscription","commits_url":"https://api.github.com/repos/raul-ae/readme_generator/commits{/sha}","git_commits_url":"https://api.github.com/repos/raul-ae/readme_generator/git/commits{/sha}","comments_url":"https://api.github.com/repos/raul-ae/readme_generator/comments{/number}","issue_comment_url":"https://api.github.com/repos/raul-ae/readme_generator/issues/comments{/number}","contents_url":"https://api.github.com/repos/raul-ae/readme_generator/contents/{+path}","compare_url":"https://api.github.com/repos/raul-ae/readme_generator/compare/{base}...{head}","merges_url":"https://api.github.com/repos/raul-ae/readme_generator/merges","archive_url":"https://api.github.com/repos/raul-ae/readme_generator/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/raul-ae/readme_generator/downloads","issues_url":"https://api.github.com/repos/raul-ae/readme_generator/issues{/number}","pulls_url":"https://api.github.com/repos/raul-ae/readme_generator/pulls{/number}","milestones_url":"https://api.github.com/repos/raul-ae/readme_generator/milestones{/number}","notifications_url":"https://api.github.com/repos/raul-ae/readme_generator/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/raul-ae/readme_generator/labels{/name}","releases_url":"https://api.github.com/repos/raul-ae/readme_generator/releases{/id}","deployments_url":"https://api.github.com/repos/raul-ae/readme_generator/deployments","created_at":"2020-06-10T20:36:29Z","updated_at":"2020-06-10T20:41:16Z","pushed_at":"2020-06-10T20:41:13Z","git_url":"git://github.com/raul-ae/readme_generator.git","ssh_url":"git@github.com:raul-ae/readme_generator.git","clone_url":"https://github.com/raul-ae/readme_generator.git","svn_url":"https://github.com/raul-ae/readme_generator","homepage":null,"size":0,"stargazers_count":0,"watchers_count":0,"language":"JavaScript","has_issues":true,"has_projects":true,"has_downloads":true,"has_wiki":true,"has_pages":false,"forks_count":0,"mirror_url":null,"archived":false,"disabled":false,"open_issues_count":0,"license":null,"forks":0,"open_issues":0,"watchers":0,"default_branch":"master","temp_clone_token":null,"network_count":0,"subscribers_count":1}
const fs = require("fs");
const axios = require("axios");



var generateMarkdown = function(data) {

  // get contributors from GitHub API
  const queryUrl = `https://api.github.com/repos/${data.owner.login}/${data.name}/contributors`;

axios.get(queryUrl).then(function(res) {
      var contributors = res.data;
      console.log(contributors)
      
});
// end of Axios

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
}
fs.writeFile("README1.md", generateMarkdown(repo), function(err) {
  if (err) {
    throw err;
  }

 
});
module.exports = generateMarkdown;
