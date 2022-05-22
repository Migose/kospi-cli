const parser = require("node-html-parser");
const request = require("request");
const iconv = require('iconv-lite') 
const charset = require('charset'); 

function getPrice(code){
    const url = "https://finance.naver.com/item/main.naver?code="+code;
    let price = "";
    request({url:url,encoding: null}, (error, res, body) =>{
        const enc = charset(res.headers, body);
        const decoded_body = iconv.decode(body, enc);

        let root = parser.parse(decoded_body);
        let price_text = root.querySelector("#middle > dl > dd:nth-child(5)").text;
        price = price_text.split("현재가",2)[1].split("전일대비",2)[0].trim().replace(",","");
        
        let name = root.querySelector("#middle > div.h_company > div.wrap_company > h2 > a").text;
        
        let today = new Date();
        console.log(today.toLocaleTimeString(), name, price);
    })

}

function getRecent(code, num){
    let now = new Date();
    let datetime = now.getFullYear() + ("0"+(now.getMonth()+1)).slice(-2);
    if (now.getDay() === 0){
        datetime = datetime + ("0"+(now.getDate()-2)).slice(-2);
    }else if (now.getDay() === 6){
        datetime = datetime + ("0"+(now.getDate()-1)).slice(-2);
    }else{
        datetime = datetime + ("0"+now.getDate()).slice(-2);
    }
    datetime = datetime + ("0"+now.getHours()).slice(-2) + ("0"+now.getMinutes()).slice(-2) + ("0"+now.getSeconds()).slice(-2);

    const url = "https://finance.naver.com/item/sise_time.naver?code="+code+"&thistime="+datetime;
    console.log(url);

    request({url:url,encoding: null}, (error, res, body) =>{
        const enc = charset(res.headers, body);
        const decoded_body = iconv.decode(body, enc);
        let root = parser.parse(decoded_body);

        console.log(root.text)
        for (let i = 0; i < num; i++){
            console.log(`tr:nth-child(${3+i})`);
            let cur_row = root.querySelector("body > table.type2 > tbody")
            console.log(cur_row)
            
        }
        
    })
}

async function trackPrice(code, time){
    while(true){
        getPrice(code);
        await sleep(time*1000);
    }
}


function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
} 

function getMarket(){
    url = "https://finance.naver.com/sise/sise_index.naver?code=KOSPI"
    request({url:url,encoding: null}, (error, res, body) =>{
        const enc = charset(res.headers, body);
        const decoded_body = iconv.decode(body, enc);

        let root = parser.parse(decoded_body);
        let kospi_index = root.querySelector("#now_value").text;
        let today = new Date();
        console.log(today.toLocaleTimeString(), kospi_index);
    })
}
module.exports = {
    getPrice,
    trackPrice,
    //getRecent,
    getMarket,
};