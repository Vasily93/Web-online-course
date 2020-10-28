const franc = require('franc');
const langs = require('langs');
const string = process.argv[2];
// console.log(langs)

let code = franc(`${string}`);
try {
    let result = langs.where('3', `${code}`);
    console.log(result.name)
} catch(err) {
    console.log('Something went wrong');
    
}



// console.log(result, name.name)