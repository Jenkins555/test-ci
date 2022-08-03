export let character = {
    name: 'Маг', 
    health: 90,
}

export function characterHealth () {
 
 if (this.health < 30) {
    return 'critical';
 } else if(this.health < 70) {
    return 'wounded';
 } else {
    return 'healthy';
 }
}

