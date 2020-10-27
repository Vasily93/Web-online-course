const fs = require('fs');
const folderName = process.argv[2] || 'Project';

//ASYNC VERSION

// fs.mkdir('Vasily' , { recursive: true}, (err) => {
//     if(err) throw err;
// });


//SYNC VERSION
try {
    fs.mkdirSync(folderName) 
    fs.writeFileSync(`${folderName}/app.html`)
    fs.writeFileSync(`${folderName}/app.js`)
} catch(err) {
    console.log(err)
}
