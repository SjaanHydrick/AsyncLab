const { getCharacter } = require('./rickAndMortyApi.js');

describe("returns a character's name, status, and species", () => {
    it('returns name, status, species', async () => {
        const morty = await getCharacter(2);

        expect(morty).toEqual(['Morty Smith', 'Human', 'Alive'])
    });
});