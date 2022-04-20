const fs = require("fs");
const inquirer = require("inquirer");


inquirer
  .prompt([
    {
      type: "input",
      message: "What is the project title?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the project description?",
      name: "description",
    },
    {
      type: "input",
      message: "What are the install instructions?",
      name: "install",
    },
    {
      type: "input",
      message: "What is the usage information?",
      name: "usage",
    },
    {
      type: "input",
      message: "What is the project license?",
      name: "license",
    },
    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "contribute",
    },
    {
      type: "input",
      message: "What are the test instructions?",
      name: "tests",
    },
  ])
  .then(({ title, description, install, usage, license, contribute, tests }) => {
    // let ghHtml = `\n`;
    // if (!github === "") {
    //   ghHtml = `<p>GitHub: ${github}</p>\n`;
    // }
    fs.writeFile(
      "./generated.md",
      `${buildReadme()}`,
      (err) => (err ? console.error(err) : console.log("Success!"))
    );
  });




function buildReadme() {
  return `# ${title}

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
  
  ${install}
  
  ## Usage
  
  ${usage}
  
  ## Contributing
  
  ${contribute}
  
  ## Tests
  
  ${tests}
  
  ## Questions
  
  ${questions}
  
  ## License
  
  ${license}`;
}
