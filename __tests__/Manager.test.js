// Manager test
const Manager = require('../lib/Manager')

test('Instantiating manager file', () => {
    const emp = new Manager();
    expect(typeof (emp)).toBe('object');
});