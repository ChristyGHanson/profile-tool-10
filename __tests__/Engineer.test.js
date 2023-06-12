// Engineer test 
const Engineer = require('../lib/Engineer')

test('Instantiating engineer file', () => {
    const emp = new Engineer();
    expect(typeof (emp)).toBe('object');
});