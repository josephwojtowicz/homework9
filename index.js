const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");

inquirer.prompt([
{
    type: 'input',
    name: 'title',
    message: 'What is the title of this project?'
},
{
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
},
{
    type: 'list',
    name: 'license',
    message: 'Which license are you using?',
    choices: ['MIT', 'Apache 2.0'],
    filter: function (val) {
      return val.toUpperCase();
    },
  },
{
    type: 'input',
    name: 'description',
    message: 'Write a description of your project.'
},
{
    type: 'input',
    name: 'installation',
    message: 'How do you install this project?'
},
{
    type: 'input',
    name: 'usage',
    message: 'How do you use this application/project?'
},
{
    type: 'input',
    name: 'credits',
    message: 'Who are the contributing members to this project?'
}
]).then(function(data){

    
    const readMe = `
## ${data.title}
## By ${data.username}
## License ${data.license}

## Table of Contents
    -- Description
    -- Installation
    -- Usage
    -- Credits

## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
    `
    fs.writeFile('README.md', readMe, (err) => {
        if (err) {
            throw err;
        }
    });

});