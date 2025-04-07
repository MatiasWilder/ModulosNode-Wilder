const { parse } = require("path");
const url = require("url");

function parsearUrl(urlstring){
    let urlobj = new URL(urlstring);
    return {
        pathname: urlobj.pathname,
        host: urlobj.host,
        parametros: urlobj.searchParams,
    };
}

module.exports = (parsearUrl);