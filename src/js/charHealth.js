export const character = {
  name: 'Маг',
  health: 90,
};

export function characterHealth(obj) {
  let heroHealths = '';
  if (obj.health < 30) {
    heroHealths = 'critical';
  } else if (obj.health < 70) {
    heroHealths = 'wounded';
  } else if (obj.health < 100) {
    heroHealths = 'healthy';
  }
  return heroHealths;
}
