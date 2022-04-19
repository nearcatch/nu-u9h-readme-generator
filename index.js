const fs = require("fs");
const inquirer = require("inquirer");

function buildReadme() {
  `# ${title}

  ## Description
  
  ${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Contributing
  
  ${contributing}
  
  ## Tests
  
  ${tests}
  
  ## Questions
  
  ${questions}
  
  ## License
  
  ${license}`;
}
