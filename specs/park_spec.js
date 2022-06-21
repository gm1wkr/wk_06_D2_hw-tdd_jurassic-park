const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;
  let park;
  
  beforeEach(function () {
    dinosaur1 = new Dinosaur("t-rex", "carnivore", 10);
    dinosaur2 = new Dinosaur("t-rex", "carnivore", 10);
    dinosaur3 = new Dinosaur("t-rex", "carnivore", 10);
    dinosaur4 = new Dinosaur("bobasaur", "herbivore", 20);
    dinosaur5 = new Dinosaur("bobasaur", "herbivore", 20);
    let dinosaursList = [dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5];
    park = new Park("Jurassic", 10, dinosaursList);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 5);
  });
  
  it('should be able to add a dinosaur to its collection', function(){
    const dinosaurToAdd = new Dinosaur("Mikeasaur", "biscuits", 2);
    park.addDinosaur(dinosaurToAdd);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 6);
  });
  
  it('should be able to remove a dinosaur from its collection', function(){
    
    park.removeDinosaur(this.dinosaur1);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4);
    
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const popularDino = new Dinosaur("Popasaurus", "carnivore", 100);
    const actual = popularDino.guestsAttractedPerDay;
    assert.strictEqual(actual, 100);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const dinoList = park.getAllBySpecies("bobasaur");
    const actual = dinoList.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = park.visitorsPerDay();
    assert.strictEqual(actual, 70);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    // (10 + 10 + 10 + 20 + 20) * 365  =  70 * 365 = 25550
    const actual = park.visitorsPerYear();
    assert.strictEqual(actual, 25550);
  });

  it('should be able to calculate total revenue for one year', function(){
    // visitors per year * ticket price = 25550 * 10 = 255500
    const actual = park.revenuePerYear();
    assert.strictEqual(actual, 255500)
  });

  it('should delete all dino of species', function(){
    park.removeSpecies("bobasaur");
    const speciesList = park.getAllBySpecies("bobasaur");
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4);
  });

  it('should return diet object', function(){
    const actual = park.getDietObject();
    assert.deepStrictEqual(actual, {carnivore: 3,herbivore: 2});
  });

});
