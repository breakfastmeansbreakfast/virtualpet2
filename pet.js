let DEFAULT_AGE = 0;
let DEFAULT_HUNGER = 0;
let DEFAULT_FITNESS = 10;

function Pet(name) {
  this.name = name
  this.age = DEFAULT_AGE
  this.hunger = DEFAULT_HUNGER
  this.fitness = DEFAULT_FITNESS
  this.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    }
  this.walk = function() {
    if (this.fitness > 7) {
      this.fitness = 10
    } else {
      this.fitness +=4
    }
  }
}

module.exports = Pet;
