function renderLicenseBadge(license) {
    if(license!=="None"){
      return `![github license](https://img.shields.io/badge/license-${license}-blue.svg)`
    } else {
      return ""
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if(license!=="None"){
      return `\n* [License](#license)`
    } else {
      return ""
    }
    
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if(license!=="None"){
      return `## License
      
      This project is licensed under the ${license} license`
    } else {
      return ""
    }
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  `;
  }
  
  function generateReadMe(answers) {
    return `# ${answers.title}
    ## Description
     ${answers.description}
    ## Table of Contents
     [Description](#description)\n
     [Installation](#installation)\n
     [Usage](#usage)\n
     [License](#license)\n
     [Contributing](#contributing)\n
     [Tests](#tests)\n
     [Questions](#questions)\n
     [username](#username)\n
    ## Installation
    ${answers.installation}  
    ## Usage
    ${answers.usage}
    ## License
    ${answers.license}
    ## Contributing
    ${answers.contributing}
    ## Tests
    ${answers.tests}
    ## Questions
   
    Find me on GitHub: (smurphy823/github.com)\n
    Email me with any questions: (stephaniemurphy588@yahoo.com)\n
   _This README was generated by [README-generator](https://github.com/smurphy823/README-generator)_
    `;
  }
  module.exports = generateMarkdown;
  module.exports = generateReadMe;