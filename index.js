const fs = require("fs");
const inquirer = require("inquirer");

function infoPrompt() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project's title?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project:",
    },
    {
      type: "input",
      name: "install",
      message: "What command is used to install the project?",
      default() {
        return 'npm i';
      }
    },
    {
      type: "input",
      name: "usage",
      message: "What should a user know about using this project?",
    },
    {
      type: "input",
      name: "tests",
      message: "What command is used to test the project?",
      default() {
        return 'npm test';
      }
    },
    {
      type: "input",
      name: "contribute",
      message: "What are the contribution guidelines?",
    },
    {
      type: "input",
      name: "github",
      message: "GitHub username:",
    },
    {
      type: "input",
      name: "email",
      message: "Email:",
    },
    {
      type: "list",
      name: "license",
      message: "What license will the project have?",
      choices: [
        "Apache 2.0",
        "GNU GPL v3",
        "MIT",
        "WTFPL",
        "none",
      ],
    },
  ]);
}

infoPrompt().then((answers) => {
  fs.writeFile("./generated.md", `${buildReadme(answers)}`, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
});

function buildReadme({
  title,
  description,
  install,
  usage,
  tests,
  contribute,
  github,
  email,
  license,
}) {
  return `# ${title}
${chooseBadge(license)}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

## Installation

Run the below command to install dependencies:

\`\`\`
${install}
\`\`\`

## Usage

${usage}

## Tests

Run the below command to test:

\`\`\`
${tests}
\`\`\`

## Contributing

${contribute}

## Questions

Github: [https://github.com/${github}](https://github.com/${github})

Email: [${email}](mailto:${email})

## License

${license}`;
}

function chooseBadge(license) {
  let badge = "";
  if (license === "Apache 2.0") {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU GPL v3") {
    badge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "MIT") {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "WTFPL") {
    badge =
      "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
  }
  return badge;
}
