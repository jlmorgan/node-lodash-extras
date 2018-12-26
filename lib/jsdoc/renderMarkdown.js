"use strict";

const {
  renderAlias,
  renderArguments,
  renderDescription,
  renderExamples,
  renderParams,
  renderReturns
} = require("./render");

module.exports = entry => `# _.${entry.name}(${renderArguments(entry.params)})

${renderDescription(entry.description)}

${entry.alias ? renderAlias(entry.alias) : ""}

## Arguments

${renderParams(entry.params)}

## Returns

${renderReturns(entry.returns)}

## Examples

${renderExamples(entry.examples)}
`;
