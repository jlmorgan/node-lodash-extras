"use strict";

const renderAlias = alias => `### Aliases

* \`_.${alias}\`
`;
const renderArguments = params => (params || [])
  .map(param => param.name)
  .join(", ");
const renderDescription = description => (description || "")
  .replace(/\n(\S)/gu, " $1")
  .replace(/\{@(code|link) ([^}]+?)\}/gu, "`$2`");
const renderExample = example => (example || "")
  .replace(/\{@(code|link) ([^}]+?)\}/gu, "`$2`")
  .replace(/<(caption)>([^<]+?)<\/\1>\s*?/u, "### $2\n\n```javascript")
  .replace(/```javascript\s+?/u, "```javascript\n")
  .replace(/\n*?$/u, "\n```");
const renderExamples = examples => (examples || [])
  .map(renderExample)
  .join("\n\n");
const renderParam = param => `* \`${param.name} (${param.type.names.join("|")})\`: ${renderDescription(param.description)}`;
const renderParams = params => (params || [])
  .map(renderParam)
  .join("\n");
const renderReturn = entryReturn => `* \`(${entryReturn.type.names.join("|")})\`: ${renderDescription(entryReturn.description)}`;
const renderReturns = entryReturns => (entryReturns || [])
  .map(renderReturn)
  .join("\n");

module.exports = {
  renderAlias,
  renderArguments,
  renderDescription,
  renderExamples,
  renderParams,
  renderReturns
};
