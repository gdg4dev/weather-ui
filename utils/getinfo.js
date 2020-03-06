const getGeoInfo = require('./geocode')
const getTempInfo = require('./tempreature')

const getWeatherInfo = (name, op) => {
    const coorInfo = getGeoInfo(name, (x, err) => {
        if (err === undefined) {
            const tempInfo = getTempInfo(x, (y, err) => {
                const finalOutput = '  Summary: ' + y.overallForecast + '  It is currently ' + y.currentTemp + ' degrees out. There is ' + y.rainProbability + '% chance of rain'
                y.premadeForecastString = finalOutput
                op(y, err)
            })
        } else {
            op(x, err)
        }

    })
}

module.exports = getWeatherInfo


