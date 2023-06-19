// Employee test ../lib/Employee'
const Employee = require('../lib/Employee.js')

test('Instantiating employee file', () => {
    const emp = new Employee();
    expect(typeof (emp)).toBe('object');
});
