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
});
