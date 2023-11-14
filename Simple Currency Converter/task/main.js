const input = require("sync-input");

const CUR_MAP = {
    'USD': 1,
    'JPY': 113.5,
    'EUR': 0.89,
    'RUB': 74.36,
    'GBP': 0.75,
};

const printUsdToCurrency = (value, currency) => console.log(`1 USD equals ${value} ${currency}`);

const intro = () => {
    console.log("Welcome to Currency Converter!");
    for (let cur in CUR_MAP) {
        printUsdToCurrency(CUR_MAP[cur], cur);
    }
    console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP");
    console.log("Type the currency you wish to convert: USD");
}

const inputToCur = () => input("To: ").toUpperCase()

const inputAmount = () => Number(input("Amount: "))

const check = {
    check: (res, error) => {
        if (!res) console.log(error);
        return res;
    },

    isNumber(num) {
        return this.check(
            Number.isFinite(num),
            "The amount has to be a number"
        );
    },

    isLT1(num) {
        if (!this.isNumber(num)) return false;
        return this.check(
            num >= 1,
            "The amount cannot be less than 1"
        )
    },

    isCurrency(curList, cur) {
        return this.check(
            curList.includes(cur),
            "Unknown currency"
        )
    },
}

function convert(fromCur, toCur, amount) {
    return (amount / CUR_MAP[fromCur] * CUR_MAP[toCur]).toFixed(4)
}

function main() {
    intro();
    const fromCur = 'USD'
    const toCur = inputToCur();
    if (!check.isCurrency(Object.keys(CUR_MAP), toCur))
        return;
    const amount = inputAmount();
    if (!check.isLT1(amount))
        return;
    const resAmount = convert(fromCur, toCur, amount)
    console.log(`Result: ${amount} ${fromCur} equals ${resAmount} ${toCur}`)
}

main()