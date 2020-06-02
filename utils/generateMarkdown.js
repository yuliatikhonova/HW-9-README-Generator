function generateMarkdown(data) {
  return `
# ${data.title}
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](${data.URL})
[![GitHub contributors](https://img.shields.io/github/contributors/${data.name}/HW-9-README-Generator.svg)](${data.URL})

## Description

  ${data.Description}

## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage) 

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  * [Demo](#GIF)

## Installation

  To install necessary dependencies, run the following command:
  
  * ${data.Installation}

## Usage

  ${data.Usage} 

## License
  Licenses used in this project:

  * ${data.License} 

## Contributing
  
  * ${data.Contributing} 

## Tests
  To run tests, run the following command:
  
  * ${data.Tests} 
  

## Questions
  If you have any questions or issues, please contact [Yulia Tikhonova](undefined) directly at ${data.email}. 

## Demo
  Here is the demo of the project:



`;
}

module.exports = generateMarkdown;
