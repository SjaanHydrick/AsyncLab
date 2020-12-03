const fsPromises = require('fs').promises;
const fetch = require('node-fetch');

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

// fsPromises.readFile('./README.md', 'utf-8')
//     .then(data => {
//         fsPromises.writeFile('./README.md', data)
//     })
//     .then(() => {console.log('DONE!')});

// const fetchQuotes = () => {
//     return fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
//         .then(res => {
//             return res.json();
//         })
//         .then(json => {
//             console.log(json.map(quote => quote.quote))
//             return json.map(quote => quote.quote)
//         })
// }

const fetchCharacters = () => {
    return fetch('https://rickandmortyapi.com/api/character/')
        .then(res => {
            return res.json();
        })
        .then(({ results }) => 
        console.log(results.map(({ name }) => name))
        );
};

// Promise.all([
//     fetch('http://futuramaapi.herokuapp.com/api/quotes/1'),
//     fetch('https://rickandmortyapi.com/api/character/')
// ])
//     .then(([resChar]) => {
//         return resChar.json();
//     })
//     .then(({ results }) => 
//     console.log(results.map(({ origin }) => origin.name)));