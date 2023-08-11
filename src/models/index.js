const fs = require("fs");
const path = require('path')
const loadDB = () => JSON.parse(fs.readFileSync(path.join(__dirname, '../models/db.json')));

module.exports = { loadDB }