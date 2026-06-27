#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  console.log(`teleology

Runtime-neutral doctrine package for human-agent collaboration.

Usage:
  npx teleology
  npx teleology help

This package currently reserves the public CLI entrypoint and ships the
canonical doctrine bundle in Markdown.`);
  process.exit(0);
}

console.log("teleology");
console.log("");
console.log("Doctrine bundle for purpose, truth, evidence, method, ontology, and governance.");
console.log("See README.md and START_HERE.md in the package contents.");
