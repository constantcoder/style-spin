#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
  title: `Style Spin`,
  tagLine: `Spin it to win it`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#bada55`,
  color: `#000000`,
  bold: true,
  clear: true,
});
console.log(`
A command line interface to help you spin up your new project with the JavaScript framework, library and styling you want.

Made by Garrett Lovell

Twitter: @CoderConstant
GitHub: github.com/constantcoder
Blog: constantcoder.io

`);
