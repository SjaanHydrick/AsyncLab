const fetch = require('node-fetch');

const getCharacter = async (id) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const json = await res.json()
    const character = [json.name, json.species, json.status]
    return character
}

const getManyCharacters = async (arr) => {
    const promiseArr = arr.map(characterId => {
        return getCharacter(characterId)
    })

    return await Promise.all(promiseArr);
}

getManyCharacters([2, 3, 1]);

module.exports = {
    getCharacter,
    getManyCharacters
}