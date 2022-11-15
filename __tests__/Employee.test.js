const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jay');
  
    expect(employee.name).toEqual('Jay');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    
  });
