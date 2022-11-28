import { readFileSync } from "fs";

let rawdata = readFileSync("config.json");
let config = JSON.parse(rawdata);
console.log(config);
