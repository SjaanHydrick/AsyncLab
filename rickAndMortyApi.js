const fetch = require('node-fetch');

const getCharacter = async (id) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const json = await res.json()
    const character = [json.name, json.species, json.status]
    return character
}

module.exports = {
    getCharacter
}