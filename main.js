#!/usr/bin/env node
const crawling = require("./crawling.js");

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
    case "search":
        let json = require("./csvjson.json");
        json.forEach((x)=>{
            if(x.comname.includes(code)){
                console.log(`${x.code}\t${x.comname}`);
            }
        })
        break;

    case "market":
        crawling.getMarket()
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}