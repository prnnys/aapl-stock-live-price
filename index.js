const liveStockPrice = require('stock-price-live-feed');

async function liveStock() {
    liveStockPrice('AAPL')
        .then((price) => {
            console.log('Stock price:', price);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

module.exports = {
    liveStock
}


