#!/usr/bin/env node
const fs = require('fs');
const program = require('commander');
const pkg = require('../package');

program
    .version(pkg.version, '-v, --version')
    .option('-t, --target [name]', 'Target iCloud will ignore', 'node_modules')
    .parse(process.argv);

const basePath = program.target;
const nosyncPath = `${basePath}.nosync`;
const isBasePathOK = fs.existsSync(basePath) && fs.lstatSync(basePath).isDirectory();
const isNosyncExist = fs.existsSync(nosyncPath);

if (isBasePathOK && !isNosyncExist) {
    fs.rename(basePath, nosyncPath, (err) => {
        if (err) throw err;
    });
    fs.symlinkSync(nosyncPath, basePath, 'file');
}