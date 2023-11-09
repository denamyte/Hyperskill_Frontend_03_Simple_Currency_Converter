const welcome = () => console.log("Welcome to Currency Converter!")

const printUsdToCurrency = (value, currency) => console.log(`1 USD equals ${value} ${currency}`)

const map = {
    'USD': 1,
    'JPY': 113.5,
    'EUR': 0.89,
    'RUB': 74.36,
    'GBP': 0.75,
}

function run() {
    welcome()
    for (curr in map) {
        printUsdToCurrency(map[curr], curr)
    }
}

run()