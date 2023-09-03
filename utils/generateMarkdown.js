// function to generate markdown for README
function generateMarkdown(data) {
  // Generate the badge and license notice based on user's choice
  const licenseBadge = generateLicenseBadge(data.license);
  const licenseNotice = generateLicenseNotice(data.license);

  return `# ${data.title}

  ${licenseBadge}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${licenseNotice}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, feel free to reach out to me at [${data.email}](mailto:${data.email}). You can also find me on GitHub as [${data.github}](https://github.com/${data.github}).
  `;
}


// Function to generate a badge based on the selected license
function generateLicenseBadge(license) {
  const badges = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    };

  return badges[license] || "";
}

module.exports = generateMarkdown;
