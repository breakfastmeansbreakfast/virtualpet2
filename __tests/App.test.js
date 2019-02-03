const Pet = require('../pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });
  it('checks if pet has a name',  () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
  });
  it('checks if pet can grow up', () => {
    const pet = new Pet('Poop');
    pet.growUp();
    expect(pet.age).toEqual(1);
  }); 
  it('checks hunger and fitness effect of grow up', () => {
    const pet = new Pet('turdling');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });
  it('checks keeping fit', () => {
    const pet = new Pet('poopy');
    pet.growUp();
    pet.growUp();
    pet.walk();
    pet.walk();
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
  it('checks hunger', () => {
    const pet = new Pet('poopy');
    pet.growUp();
    pet.growUp();
    pet.feed();
    pet.feed();
    pet.feed();
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
  it('checkup function', () => {
    const pet = new Pet('laddo');
    pet.growUp();
    pet.growUp();
    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
  });
  it('checks if pet is alive', () => {
    const pet = new Pet('piss');
    pet.growUp();
    pet.growUp();
    pet.growUp();
    pet.growUp();
    expect(pet.isAlive()).toEqual(false);
  })
});
