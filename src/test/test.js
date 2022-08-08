const health = require('../js/charHealth');

test('HealthTest', () => {
  const character1 = {
    name: 'Маг', health: 90,
  };
  const character2 = {
    name: 'Маг', health: 60,
  };
  const character3 = {
    name: 'Маг', health: 20,
  };
  expect(health.characterHealth(character1)).toBe('healthy');
  expect(health.characterHealth(character2)).toBe('wounded');
  expect(health.characterHealth(character3)).toBe('critical');
});
