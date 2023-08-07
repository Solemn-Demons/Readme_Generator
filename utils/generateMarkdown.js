// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Static Badge](https://img.shields.io/badge/license-${license}-brightgreen.svg)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [license](#license)\n`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return '## License: licensed under ' + license + ' License';
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  *[Description](#Description)
  *[Install](#Install)
  *[Instuctions](#Instructions)
  *[Examples](#Examples)
  *[Contributors](#Contributors)
  *[Test](#Test)

  ${renderLicenseLink(data.license)}

  ## Description
  ${data.Description}

  ## Installation
  ${data.Install}

  ## Instructions
  ${data.Instructions}

  ## Examples
  ${data.Examples}

  ## Contributors Guidelines
  ${data.Contributors}

  ## Test
  ${data.Test}

  ## Questions

  If there are any questions, you can contact me at:

  * Name - ${data.username}
  * Project name - ${data.title}
  * Email - ${data.Email}
  * Github - ${data.Repo}
  
  Should there be any bugs found please create an issue on the repo provided.

  ## Contributors

  ${data.Contributors}

  ##Testing
  ${data.Test}

  ${renderLicenseSection(data.license)}
  
`;
}

module.exports = generateMarkdown;
