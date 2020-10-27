const req = new XMLHttpRequest();

req.onload = function() {
    console.log('all done with req')
    let result = JSON.parse(this.responseText)
    console.log(result.ticker.price)
}

req.onerror = function() {
    console.log('error')
    console.log(this)
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send();