// Copy A File
const fsPromises = require('fs').promises;

const copyFile = (src, dst) => {

    return fsPromises.readFile(src, 'utf-8')
        .then(data => {
            fsPromises.writeFile(dst, data);
        })
        .catch(err => {
            console.log(err)
        })
}

// Transformer
const transform = (src) => {
    return fsPromises.readFile(src, 'utf-8')
    .then(data => {
        return data.replace( /[^a-z]/g, '');
    })
    .then(data => {
        return data.toUpperCase();
    })
    .then(data => {
        return data.split('').reverse().join('');
    })
    .then(data => {
        return fsPromises.writeFile(src, data)
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = {
    copyFile,
    transform
}