const login = async (username, password) => {
    if(!username || !password) throw 'Missing Cedentials';
    if(password === 'VasilyHere') return true;
    throw 'Invalid Password'
}

login('Vasya', 'VasilyHere')
    .then(msg => {
        console.log('logged in')
        console.log(msg)
    })
    .catch(err => {
        console.log(err)
    })