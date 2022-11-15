const Intern = require('../lib/Intern');

test('overrides role and adds school', () => {
  
    expect(Intern.role).toEqual("Intern");
    expect(Intern.school).toEqual(expect.any(String));
    
  });