const fsPromises = require('fs').promises;

// fsPromises.readFile('./README.md', 'utf-8')
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err);
//     });


// fsPromises.writeFile('./chain-cool.txt', 'words or whatever')
//     .then(() => {console.log('done')
//     })
//     .catch(err => {console.log(err)
//     });

fsPromises.readFile('./README.md', 'utf-8')
    .then(data => {
        fsPromises.writeFile('./README.md', data)
    })
    .then(() => {console.log('DONE!')});