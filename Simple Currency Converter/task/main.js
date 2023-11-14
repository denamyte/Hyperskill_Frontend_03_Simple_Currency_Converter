const input = require("sync-input");

const CUR_MAP = {
    'USD': 1,
    'JPY': 113.5,
    'EUR': 0.89,
    'RUB': 74.36,
    'GBP': 0.75,
};

const ch = {
    _check(res, error) {
        if (!res) console.log(error);
        return res;
    },

    isWhatToDo(num) {
        return ch._check(
            [1, 2].includes(num),
            "Unknown input"
        )
    },

    isNumber(num) {
        return ch._check(
            Number.isFinite(num),
            "The amount has to be a number"
        );
    },

    isGTE1(num) {
        if (!ch.isNumber(num)) return false;
        return ch._check(
            num >= 1,
            "The amount cannot be less than 1"
        );
    },

    isCurrency(cur) {
        return ch._check(
            Object.keys(CUR_MAP).includes(cur),
            "Unknown currency"
        );
    },

};

const printUsdToCurrency = (value, currency) => console.log(`1 USD equals ${value} ${currency}`);

const intro = () => {
    console.log("Welcome to Currency Converter!");
    for (let cur in CUR_MAP) {
        printUsdToCurrency(CUR_MAP[cur], cur);
    }
}

function convert(from, to, amount) {
    return (amount / CUR_MAP[from] * CUR_MAP[to]).toFixed(4);
}

const goodbye = () => console.log("Have a nice day!")

const inp = {
    _getInput: function(prompt, checkerCB, isNumber = false, isUpper = true) {
        while (true) {
            let value = input(prompt);
            if (isNumber) value = Number(value);
            else if (isUpper) value = value.toUpperCase();
            if (checkerCB(value)) return value;
        }
    },
    whatToDo: function() {
        return this._getInput(
            "What do you want to do?\n" +
            "1-Convert currencies 2-Exit program\n",
            ch.isWhatToDo, true);
    },
    getFromCur: function() {
        return this._getInput("What do you want to convert?\nFrom: ", ch.isCurrency);
    },
    getToCur: function() {
        return this._getInput("To: ", ch.isCurrency);
    },
    amount: function() {
        return this._getInput("Amount: ", ch.isGTE1, true);
    },
};


function main() {
    intro();
    while (true) {
        if (inp.whatToDo() === 2) break;
        const from = inp.getFromCur();
        const to = inp.getToCur();
        const amount = inp.amount();
        const res = convert(from, to, amount);
        console.log(`Result: ${amount} ${from} equals ${res} ${to}`);
    }
    goodbye()
}

main();