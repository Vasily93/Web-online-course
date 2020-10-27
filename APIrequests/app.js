
// old way with callbacks:
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


//newer way with promises using fetch method
fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then((data) => {
        console.log(data)
        return data.json();
    })
    .then(data => console.log(data.ticker.price))
    .catch((err) => console.log(err))

//async await way of doing requests
const fethcBitcoinPrive = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await res.json();
        console.log(data, 'async fetch')
    } catch(err) {
        console.log("Erroor!",err)
    }
}
fethcBitcoinPrive()

//Using Axios library
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log('AXIOS!', res.data.ticker)
    })
    .catch(err => {
        console.log(err)
    })