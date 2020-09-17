const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hi vasily!')
});
app.get('/dog', (req, res) => {
    res.send('wooof!')
});
app.get('/bye', (req, res) => {
    res.send('goodbye Vasily!')
});

app.listen(3000, () => {
    console.log('listening on port 3000')
})