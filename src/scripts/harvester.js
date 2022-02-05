import { createPotato } from "./seeds/potato.js";
import { plantSeeds } from "./tractor.js"
import { usePlant } from "./field.js";

// const currentField = plantSeeds(plan)


export const harvestPlants = (plants) => {
        
    const harvest = []

    for(let i = 0; i < plants.length; i++ ) {
            
        if (seed[i].type === "Corn"){
            for(let j=0; j > (plants[i].output/2); j++){
                harvest.push(plants[i])
            }
        }
        else {

        
            for(let j=0; j < plants[i].output; j++){
                harvest.push(plants[i])
            }
        }

    }
        return { harvest }
  
        
}

harvestPlants();