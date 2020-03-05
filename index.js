const axios = require("axios");

const currencyConverter = (amount, currencyFrom, currencyTo, callback) => {
  axios
    .get(
      "http://data.fixer.io/api/latest?access_key=e5c936a710f30832b5f79d1b2c9ccb7e&format=1"
    )
    .then(response => {
      const rateTo = response.data.rates[currencyTo.toUpperCase()];
      const rateFrom = response.data.rates[currencyFrom.toUpperCase()];

      const amountTo = (amount * rateTo) / rateFrom;

      callback(
        `${amount} ${currencyFrom.toUpperCase()} = ${amountTo} ${currencyTo.toUpperCase()} (taux de change appliqué : ${rateTo /
          rateFrom})`
      );
    });
};

currencyConverter(15, "eur", "usd", message => {
  console.log(message); // Devra afficher : `15 EUR > 18.34 USD (taux de change appliqué : 1.223)`.
});
