// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)`;
  } else if (license === "Apache") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "GPL") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "BSD") {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  } else {
    return "";
  }
}

// a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (license === "Apache") {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === "GPL") {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (license === "BSD") {
    return `https://opensource.org/licenses/BSD-3-Clause`;
  } else {
    return "";
  }
}

// a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `This project is licensed under the [MIT](${renderLicenseLink(license)}) license. `;
  } else if (license === "Apache") {
    return `This project is licensed under the [Apache](${renderLicenseLink(license)}) license.`;
  } else if (license === "GPL") {
    return `This project is licensed under the [GPL](${renderLicenseLink(license)}) license.`;
  } else if (license === "BSD") {
    return `This project is licensed under the [BSD](${renderLicenseLink(license)}) license.`;
  } else {
    return "";
  }
}

//a function to generate markdown for README
function generateMarkdown(data) {
// -- include the title of the project and sections entitled Description
// -- Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  To run tests, run the following command:
  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](www.github.com/${data.github}/)
  `;
}

module.exports = generateMarkdown;



