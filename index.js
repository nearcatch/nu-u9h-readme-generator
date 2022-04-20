const fs = require("fs");
const inquirer = require("inquirer");

function infoPrompt() {
  return inquirer.prompt([
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
      message: "What are the test instructions?",
      name: "tests",
    },
    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "contribute",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the project license?",
      name: "license",
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
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${install}

## Usage

${usage}

## Tests

${tests}

## Contributing

${contribute}

## Questions

${github} ${email}

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
