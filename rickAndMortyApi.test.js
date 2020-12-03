const { getCharacter, getManyCharacters } = require('./rickAndMortyApi.js');

describe("returns a character's name, status, and species", () => {
    it('returns name, status, species', async () => {
        const morty = await getCharacter(2);

        expect(morty).toEqual(['Morty Smith', 'Human', 'Alive'])
    });
});

describe("returns an array of characters' names", () => {
    it('returns names of an array of characters', async () => {
        const charArray = [1, 2, 3]

        expectedArray = [
            [
                'Rick Sanchez',
                'Human',
                'Alive'
            ],
            [
                'Morty Smith',
                'Human',
                'Alive'
            ],
            [
                'Summer Smith',
                'Human',
                'Alive'
            ]]
        

        return getManyCharacters(charArray)
            .then((result) => {
                return expect(expectedArray).toEqual(result)
            })
    });
});