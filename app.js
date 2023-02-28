const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 3000
const viewPath = path.join(__dirname, '/templates/views')
const partialsPath = path.join(__dirname, '/templates/partials')
const publicPath = path.join(__dirname, './public')
const getWeatherInfo = require('./utils/getinfo')
app.use(express.static(publicPath))
hbs.registerPartials(partialsPath)
app.set('view engine', 'hbs')
app.set('views', viewPath)
app.get('', (req, res) => {
    res.render('index', {
        title: 'Home | Weather UI',
        head: 'Weather UI',
        author: 'Aniket Hirpara',
        navItem1State: 'active'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.location) {
        return res.send({
            error: 'You must provide an valid address to use weather-ui API'
        })
    }
    const userLocation = req.query.location
    getWeatherInfo(userLocation, (x, error) => {
        if (error === undefined) {
            res.send(x)
        } else {
            res.send({ error: x + ' | ' + error })
        }
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help | Weather UI',
        head: 'Help for Weather UI',
        author: 'Aniket Hirpara',
        navItem3State: 'active'
    })
})

app.get('*', (req, res) => {
    // res.render('404')
    res.redirect('404.html')

})
app.listen(port, () => {
    console.log('Server successfully started at port ' + port)
})


module.exports = app;