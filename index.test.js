const { copyFile, transform } = require('./index.js');

const fsPromises = require('fs').promises;

describe('copy', () => {

    afterEach(() => {
        fsPromises.unlink('newrm.txt');
    })

    it('copies a file and returns it', async () => {
        await copyFile('README.md', 'newrm.txt');

        const result = await fsPromises.readFile('newrm.txt', 'utf-8');

        expect(result).toEqual('# AsyncLab')
    });
});

describe('transform', () => {

    afterEach(() => {
        return fsPromises.writeFile('transform.txt', 'Everything Is On Fire');
    })

    it('transforms a file to all lowercase, then all uppercase, then reverses it', async () => {
        await transform('transform.txt');

        const result = await fsPromises.readFile('transform.txt', 'utf-8');

        expect(result).toEqual('ERINSGNIHTYREV')
    });
});