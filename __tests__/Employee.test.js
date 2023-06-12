// Employee test
const Employee = require('../lib/Employee')

test('Instantiating employee file', () => {
    const emp = new Employee();
    expect(typeof (emp)).toBe('object');
});