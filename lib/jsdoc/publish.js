"use strict";
/* eslint-disable no-console */

// Node
const { writeFile } = require("fs");
const path = require("path");

// Project
const renderMarkdown = require("./renderMarkdown");

// Constants
const docsPath = path.normalize(path.join(__dirname, "..", "..", "docs"));
const writeFileAsync = values => writeFile(
  values.filePath,
  values.data,
  { encoding: "utf8" },
  error => (error ?
    console.error(`Failed to write ${path.basename(values.filePath)}: ${error}`) :
    console.log(`Successfully written ${path.basename(values.filePath)} to docs.`)
  )
);

/**
 * Pick the fields necessary for rendering.
 *
 * @private
 * @param {Object} entry - JSDoc entry.
 * @return {Object}
 */
function pickFields(entry) {
  return {
    "description": entry.description,
    "examples": entry.examples,
    "longname": entry.longname,
    "name": entry.name,
    "params": entry.params,
    "returns": entry.returns
  };
}

/**
 * Pepares the entry to writing to a file.
 *
 * @private
 * @param {Object} entry - JSDoc entry.
 * @return {Object}
 */
function prepareFile(entry) {
  return {
    data: renderMarkdown(entry)
      .replace(/\n{2,}/gu, "\n\n"),
    filePath: path.join(docsPath, entry.name.concat(".md"))
  };
}

/**
 * Convert the JSDoc entries to Markdown in the docs directory.
 *
 * @private
 * @param {Object[]} data - Array of JSDoc entries.
 */
function publish(data) {
  data()
    .filter({ "kind": "function" })
    .filter({ "undocumented": { "!is": true } })
    .map(pickFields)
    .map(prepareFile)
    .forEach(writeFileAsync);
}

module.exports.publish = publish;
