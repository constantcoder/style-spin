#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');

welcome({
  title: `Style Spin`,
  tagLine: chalk.rgb(255,255,0)(`Spin it to win it`),
  description: chalk.italic(pkgJSON.description),
  version: pkgJSON.version,
  bgColor: `80ffea`,
  // color: `#131a20`,
  bold: true,
  clear: true,
});
console.log(`Made by ${chalk.rgb(128,255,234).bold(`Constant Coder`)}

${chalk.rgb(128,255,234).bold.inverse(` Twitter `)} ${chalk.dim('https://www.twitter.com/CoderConstant')}
${chalk.rgb(106,73,255).bold.inverse(` GitHub `)}  ${chalk.dim('https://www.github.com/constantcoder')}
${chalk.rgb(255,118,188).bold.inverse(` Blog `)}    ${chalk.dim('https://www.constantcoder.io')}
`);
