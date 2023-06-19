// Intern test
const Intern = require('../lib/Intern.js')

test('Instantiating intern file', () => {
    const emp = new Intern();
    expect(typeof (emp)).toBe('object');
});