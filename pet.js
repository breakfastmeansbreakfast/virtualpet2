let DEFAULT_AGE = 0;
let DEFAULT_HUNGER = 0;
let DEFAULT_FITNESS = 10;

function Pet(name) {
  this.name = name
  this.age = DEFAULT_AGE
  this.hunger = DEFAULT_HUNGER
  this.fitness = DEFAULT_FITNESS
  this.children = []
  this.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    }
  this.walk = function() {
    if (!this.isAlive) {
      throw new Error('Your pet is no longer alive :(');
    }   
    if (this.fitness >= 6) {this.fitness = 10}
    else {this.fitness +=4}
  }
  this.feed = function() {
    if (!this.isAlive) {
      throw new Error('Your pet is no longer alive :(');
    }  
    if (this.hunger >= 3) {this.hunger -=3}
    else {this.hunger =0}
  }
  this.checkUp = function() {
    if (!this.isAlive) {
      throw new Error('Your pet is no longer alive :(');
    }   
    if (this.hunger >= 5) {return 'I am hungry AND I need a walk'}
    else if (this.fitness <= 3) {return 'I need a walk'}
    else if (this.fitness <= 3 && this.hunger>= 5) {return 'I am hungry AND I need a walk'}
    else {return 'I feel great!'}
  }
  this.isAlive = function() {
    if (this.fitness <=0 || this.hunger >= 10 || this.age >= 30) {return false}
    else {return true}
  }
  this.adoptChild = function(child) {
    this.children.push(child)
  }
}

module.exports = Pet;
