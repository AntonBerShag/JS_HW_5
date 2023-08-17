class Creature {
    static number = 0;
  
    constructor(name, healthPoints, damage) {
      Creature.number++;
      this.id = Creature.number;
      this.name = name;
      this.healthPoints = healthPoints;
      this.damage = damage;
    }
  
    get getId() {
      return this.id;
    }
  
    defeat() {
      console.log(`${this.name} был побежден.`);
    }
}
  
class Player extends Creature {
    #lvl = 1;
  
    get lvl() {
      return this.#lvl;
    }
  
    attack(other) {
      other.healthPoints -= this.damage;
  
      if (other.healthPoints <= 0) {
        other.defeat();
        this.#lvl++;
        return true;
      }
  
      return false;
    }
}
  
class Enemy extends Creature {
    attack(other) {

      other.healthPoints -= this.damage;
  
      if (other.healthPoints <= 0) {
        other.defeat();
        return true;
      }
  
      return false;
    }
}
  
const player = new Player("Жаба", 100, 20);
const enemy = new Enemy("Гадюка", 100, 30);
  
while (player.healthPoints > 0 && enemy.healthPoints > 0) {
    if (Math.random() < 0.5) {
      player.attack(enemy);
    } else {
      enemy.attack(player);
    }
}

console.log(`${player.name} уровень: ${player.lvl}`);