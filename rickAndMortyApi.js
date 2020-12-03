const fetch = require('node-fetch');

const getCharacter = (id) => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => {
            return res.json()
        })
        .then(json => {
            return [json.name, json.species, json.status]
        });
}

module.exports = {
    getCharacter
}