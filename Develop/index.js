// Importing tools for prompts and file creation
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// README question prompts
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter the title of your project: ',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter a description: ',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions here: ',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Enter usage information here: ',
            name: 'usage',
        },
        {
            type: 'list',
            choices: ['MIT', 'Apache', 'GPL'],
            message: 'Select license used: ',
            name: 'license',
        },
        {
            type: 'input',
            message: 'Enter contribution guidelines here: ',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Enter test instructions here: ',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Enter your email address for follow up questions: ',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter your GitHub username: ',
            name: 'github',
        },
    ])
    // Generate markdown based on answers and output file
    .then(function (answers) {
        let markdown = generateMarkdown(answers)
        fs.writeFileSync('./output/readme.md', markdown)
    })