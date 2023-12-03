// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (this.license === 'true') {
    return `[![license:MIT](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io/)`

  } else {
    return ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)'

  } else if (license === 'GNU') {
    return '[https://img.shields.io/badge/License-GPL%20v2-blue.svg](https://img.shields.io/badge/License-GPL%20v2-blue.svg)'

  } else if (license === 'Apache') {
    return '[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)'

  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None of the above") {
    return `Look for the project under ${license}`

  } else {
    return "Please choose a license as you don't have one."
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  ${renderLicenseBadge(data.license)}
  [![license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io/)
  ## Table of Contents 
  - [github](#github)
  - [email](#email)
  - [project](#project)
  - [description](#description)
  - [license](#license)
  - [test](#test)
  - [instructions](#instructions)
  - [contributing](#contributing)
  ## github:
  ${data.gitHub}
  ## email:
  ${data.email}
  ## project:
  ${data.project}
  ## Description:
  ${data.description}
  ## License: 
 ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## installation:
  ${data.installation}
  ## test: 
  ${data.test}
  ## instructions:
  ${data.instructions}
  ## contributing:
  ${data.contributing}
  
  ## Contact information:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:user@example.com)`;
}

module.exports = generateMarkdown;
