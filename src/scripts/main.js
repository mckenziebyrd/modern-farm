console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { addPlant } from "./field.js"
import { usePlant } from "./field.js"
import { plantSeeds } from "./tractor.js"




const yearlyplan = createPlan()

// console.log(yearlyplan)


import { createAsparagus } from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

import { createCorn } from "./seeds/corn.js"
const cornSeed = createCorn()
// console.log(cornSeed)

import { createPotato } from "./seeds/potato.js"
const potatoSeed = createPotato()
// console.log(potatoSeed)

import { createSoybean } from "./seeds/soybean.js"
const soybeanSeed = createSoybean()
// console.log(soybeanSeed)

import { createSunflower } from "./seeds/sunflower.js"
const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)

import { createWheat } from "./seeds/wheat.js"
const wheatSeed = createWheat()
// console.log(wheatSeed)

const plan = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]

plantSeeds(plan)

console.log(usePlant())