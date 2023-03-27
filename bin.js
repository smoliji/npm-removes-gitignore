#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

function loadFile(name) {
    console.log('file:', name)
    try {
        console.log(fs.readFileSync(path.join(__dirname, '/files_i_need/', name), 'utf8'))
    } catch (error) {
        console.log(error.message)
    }
    console.log('')
}

loadFile('somejs.js')
loadFile('.gitignore')
