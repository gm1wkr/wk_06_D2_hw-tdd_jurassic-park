const Park = function(name, ticketPrice, dinosaurs){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
    this.dietObj = {};
};

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
    const index = this.dinosaurs.indexOf(dinosaur);
    // if(index !== -1){
        return this.dinosaurs.splice(index, 1);
    // }
};

Park.prototype.mostVisitors = function(){
    let maxVisitors = 0;
    let maxDino;
    this.dinosaurs.map(function(dino){
        if (dino.guestsAttractedPerDay > maxVisitors){
            maxDino = dino;
        }
    });
    return maxDino;
    
};

Park.prototype.getAllBySpecies = function(speciesToFind){
    let foundDinosaurs = []
    for (dinosaur of this.dinosaurs){
        if (dinosaur.species === speciesToFind){
            foundDinosaurs.push(dinosaur);
        }
    }
    return foundDinosaurs;
};

Park.prototype.visitorsPerDay = function(){
    let visitors = 0;
    for (const dinosaur of this.dinosaurs) {
        visitors += dinosaur.guestsAttractedPerDay;
    }
    return visitors;
};

Park.prototype.visitorsPerYear = function(){
    return (this.visitorsPerDay() * 365);
};

Park.prototype.revenuePerYear = function(){
    return(this.visitorsPerDay() * this.ticketPrice) * 365;
};


// Not right - removing array items during for loop!
Park.prototype.removeSpecies = function(species){
    for(const dino of this.dinosaurs){
        if(dino.species === species){
            const index = this.dinosaurs.indexOf(dino);
            this.dinosaurs.splice(index, 1);
        }
    }
    
};

Park.prototype.getDietObject = function(){
    // {'carnivore': 3, 'herbivore': 2}
    let dietList = [];
    let dietObj = {};
    for(const dino of this.dinosaurs){
        if(dietList.includes(dino.diet) === false){
            dietList.push(dino.diet);
        }
    }

    for(const diet of dietList){
        dietObj[diet] = 0;
        
        for (const dino of this.dinosaurs) {
            if(dino.diet === diet){
                dietObj[diet] += 1;
            }
        }
    }
    return dietObj;

};

module.exports = Park;