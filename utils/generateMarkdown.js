function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.Description}

## Table of Contents



## Installation

${data.Installation} 

## Usage

${data.Usage} 

## License

${data.License} 

## Contributing

${data.Contributing} 

## Tests

${data.Tests} 

## Questions

${data.Contributing} 

## GIF


`;
}

module.exports = generateMarkdown;
