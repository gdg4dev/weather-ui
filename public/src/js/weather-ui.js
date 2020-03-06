const form = document.querySelector('form')
const preloader = document.getElementsByClassName('preloader')[0]
const wSummary = document.getElementsByClassName('wSummary')[0]
const eString = document.getElementById('error')
const errorEle = document.getElementsByClassName('error')[0]
const lString = document.getElementsByClassName('placeName')[0]
const sString = document.getElementsByClassName('Summary')[0]
const tString = document.getElementsByClassName('Temp')[0]
const rString = document.getElementsByClassName('Rain')[0]
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (errorEle.hasAttribute('id', 'show')) {
        errorEle.removeAttribute('id', 'show')
    }
    preloader.setAttribute("id", "show");
    const input = document.querySelector('input').value
    const url = '/weather?location=' + input
    fetch(url).then((res) => {
        res.json().then((data) => {
            preloader.removeAttribute('id', 'show');
            if (data.error) {
                if (wSummary.hasAttribute('id', 'show')) {
                    wSummary.removeAttribute('id', 'show')
                }
                errorEle.setAttribute('id', 'show')
                eString.textContent = data.error
                return console.log(data.error)
            }
            if (wSummary.hasAttribute('id', 'show')) {
                wSummary.removeAttribute('id', 'show')
            }
            if (errorEle.hasAttribute('id', 'show')) {
                errorEle.removeAttribute('id', 'show')
            }
            rainPrc = NewValue = (((data.rainProbability - 0) * (100 - 0)) / (1 - 0)) + 0
            let locationString = data.placeName
            let summaryString = data.overallForecast
            let tempString = 'It is currently ' + data.currentTemp + ' degrees out'
            let rainString = 'There is ' + rainPrc + '% chance of rain'

            lString.textContent = locationString
            sString.textContent = summaryString
            tString.textContent = tempString
            rString.textContent = rainString

            wSummary.setAttribute('id', 'show')
            console.log(data.placeName)
            console.log(data.overallForecast)
        })
    })
})