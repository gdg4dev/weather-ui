const request = require('request')

const getTempInfo = (coor, op) => {
    const weatherAPI = 'https://api.darksky.net/forecast/a1a02d1d847bb450613463189490d1aa/' + coor.latitude + ',' + coor.longitude + '?units=si';
    request({ url: weatherAPI, json: true }, (e, res) => {
        if (e) {
            console.log('Unable to connect with weather services!')
        } else {
            const data = res.body
            try {
                const finData = coor
                finData.overallForecast = data.daily.data[0].summary
                finData.currentTemp = data.currently.temperature
                finData.rainProbability = data.currently.precipProbability
                const err = undefined
                // finData.push(overallForecast, currentTemp, rainProbability)

                op(finData, err)
            } catch {
                const err = 'Coordinates Error'
                const finData = 'Invalid location coordinates'
                op(finData, err)
                console.log('Invalid location coordinates')
            }
        }
    })
}

module.exports = getTempInfo