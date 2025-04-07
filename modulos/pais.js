const countryToCurrency = require("country-to-currency")

function avPais(pais){
    return countryToCurrency[ pais ]
}

module.exports = avPais;