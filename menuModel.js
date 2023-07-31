const fs = require("fs");

const loadMenu = () => JSON.parse(fs.readFileSync("menu.json"));

module.exports = { loadMenu }