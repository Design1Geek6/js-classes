
'use strict'

const bunWarmer = new BunWarmer(false)
const fryer = new Fryer(false)
const kitchen = new Kitchen(bunWarmer, fryer)

const kitchen2 = new Kitchen(new BunWarmer(true), new Fryer(true))

console.log('In kitchen 2', kitchen2.fryer.display(), 'That is', kitchen2.bunWarmer.switchPower(), 'because it is love at', kitchen2.bunWarmer.tempLevel(425), 'So', kitchen2.fryer.switchPower(), 'it is... HOT! HOT! HOT!')
console.log(kitchen.fryer.display(), 'That is', kitchen.bunWarmer.switchPower(), 'all the way to', kitchen.bunWarmer.tempLevel(600), 'So', kitchen.fryer.switchPower(), 'it is... HOT! HOT! HOT!')
