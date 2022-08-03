const health = require('../js/charHealth');

test('HealthTest', () => {
    expect(health.characterHealth(health.character)).toBe('healthy');
});

