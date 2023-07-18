// Creating shield badge from shield io
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/license-${license}-red`

}

// Creating README using key value pairs from generated object
function generateMarkdown(data) {
  return `# ${data.title}
  ![license](${renderLicenseBadge(data.license)})

  ## Description
  ${data.description} 

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ![license](${renderLicenseBadge(data.license)}) \


  This project uses the following licenses: ${data.license}


  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  For additional questions, please reach out via my email address: \n
  ${data.email}\n
  Github: \n
  https://github.com/${data.github}\n
`;
}

module.exports = generateMarkdown;