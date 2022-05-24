//Write a JavaScript function to convert an amount to coins.
function coinConvert(coins) {
    var coinarray = [];
    var amountofcoins = 0;
    amountofcoins = coins + amountofcoins;
    if (amountofcoins <= 25) {
        amountofcoins = amountofcoins - 25;
        coinarray.push(25);
    }
    else if (amountofcoins <= 10) {
        amountofcoins = amountofcoins - 10;
        coinarray.push(10);
    }
    else if (amountofcoins <= 5) {
        amountofcoins = amountofcoins - 5;
        coinarray.push(5);
    }
    else if (amountofcoins <= 2) {
        amountofcoins = amountofcoins - 2;
        coinarray.push(2);
    }
    else if (amountofcoins <= 1) {
        amountofcoins = amountofcoins - 1;
        coinarray.push(1);
    }
    return coinarray;
}
console.log(coinConvert(46))