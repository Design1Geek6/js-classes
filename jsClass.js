'use strict'

class Kitchen {
    constructor(bunWarmer, fryer) {
        this.bunWarmer = bunWarmer
        this.fryer = fryer
    }
}

class BunWarmer {
    switchPower() {
        this.hasPower = !this.hasPower
        return this.hasPower
    }
    constructor(hasPower, temp) {
        this.hasPower = hasPower
        this.temp = temp
    }

    tempLevel(temp) {
        this.temp = temp
        return this.temp + ' Degrees.'
    }

}

class Fryer {
    switchPower() {
        this.hasPower = !this.hasPower
        return this.hasPower
    }

    constructor(hasPower, message) {
        this.hasPower = hasPower
        this.message = message
    }


    display() {
        this.message
        return this.message = 'You Turn Me On!'
    }
}

const bunWarmer = new BunWarmer(false)
const fryer = new Fryer(false)
const kitchen = new Kitchen(bunWarmer,fryer)

const kitchen2 = new Kitchen(new BunWarmer(true), new Fryer(true))

console.log('In kitchen 2', kitchen2.fryer.display(), 'That is', kitchen2.bunWarmer.switchPower(), 'because it is love at', kitchen2.bunWarmer.tempLevel(425), 'So', kitchen2.fryer.switchPower(),'it is... HOT! HOT! HOT!')
console.log(kitchen.fryer.display(), 'That is', kitchen.bunWarmer.switchPower(), 'all the way to', kitchen.bunWarmer.tempLevel(600), 'So', kitchen.fryer.switchPower(),'it is... HOT! HOT! HOT!')
// console.log(fryer.display(), 'That is', bunWarmer.switchPower(), 'all the way to', bunWarmer.tempLevel(300), 'So', fryer.switchPower(),'it is... HOT! HOT! HOT!')

