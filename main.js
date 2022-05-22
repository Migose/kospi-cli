#!/usr/bin/env node
const crawling = require("./crawling.js");

//crawling.getRecent("005930", 20);

let command = process.argv[2];
let code = process.argv[3];



switch (command) {
    case "now":
        crawling.getPrice(code)
        break;
    case "track":
        let time = process.argv[4];
        crawling.trackPrice(code,time)
        break;

    default:
        console.log("Wrong command!");
        process.exit(1);
}