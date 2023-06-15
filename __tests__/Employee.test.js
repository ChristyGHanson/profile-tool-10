// Employee test
const Employee = require('../lib/Employee')

test('Instantiating employee file', () => {
    const emp = new Employee();
    expect(typeof (emp)).toBe('object');
    expect(typeof (emp)).toBe();
});

// test name, email, id, etc. 