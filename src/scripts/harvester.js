export const harvestPlants = (plants) => {
        
    const harvest = []

    for(let i = 0; i < plants.length; i++ ) {
            
        if (plants[i].type === "Corn"){
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
     
  return {harvest} 
        
}

