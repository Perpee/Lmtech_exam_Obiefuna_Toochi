const place = document.querySelector('#name')
const population = document.querySelector('#population')
const reportedToday = document.querySelector('#reportedToday')
const totalNum = document.querySelector('#totalNum')
const numOfDeath = document.querySelector('#numOfDeath')
const numOfRecovered = document.querySelector('#numOfRecovered')
const aus = document.querySelector('#aus')
const bang = document.querySelector('#bang')
const burk = document.querySelector('#burk')


async function fetchAustraliaData() {
    const url = 'https://disease.sh/v3/covid-19/countries'

    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
        displayAustraliaData(data)
    }
    catch (error) {
        place.textContent = "Data not found"
        population.textContent = ""
        reportedToday.textContent = ""
        totalNum.textContent = ""
        numOfDeath.textContent = ""
        numOfRecovered.textContent = ""
    }
}

function displayAustraliaData(data) {
    place.textContent = data[10].country
    population.textContent = data[10].population
    reportedToday.textContent = data[10].todayCases
    totalNum.textContent = data[10].cases
    numOfDeath.textContent = data[10].deaths
    numOfRecovered.textContent = data[10].recovered
}
aus.addEventListener('click', fetchAustraliaData)




async function fetchBangladeshData() {
    const url = 'https://disease.sh/v3/covid-19/countries'

    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
        displayBangladeshData(data)
    }
    catch (error) {
        place.textContent = "Data not found"
        population.textContent = ""
        reportedToday.textContent = ""
        totalNum.textContent = ""
        numOfDeath.textContent = ""
        numOfRecovered.textContent = ""
    }
}

function displayBangladeshData(data) {
    place.textContent = data[15].country
    population.textContent = data[15].population
    reportedToday.textContent = data[15].todayCases
    totalNum.textContent = data[15].cases
    numOfDeath.textContent = data[15].deaths
    numOfRecovered.textContent = data[15].recovered
}
bang.addEventListener('click', fetchBangladeshData)



async function fetchBurkinafasoData() {
    const url = 'https://disease.sh/v3/covid-19/countries'

    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
        displayBurkinafasoData(data)
    }
    catch (error) {
        place.textContent = "Data not found"
        population.textContent = ""
        reportedToday.textContent = ""
        totalNum.textContent = ""
        numOfDeath.textContent = ""
        numOfRecovered.textContent = ""
    }
}

function displayBurkinafasoData(data) {
    place.textContent = data[30].country
    population.textContent = data[30].population
    reportedToday.textContent = data[30].todayCases
    totalNum.textContent = data[30].cases
    numOfDeath.textContent = data[30].deaths
    numOfRecovered.textContent = data[30].recovered
}

burk.addEventListener('click', fetchBurkinafasoData)

