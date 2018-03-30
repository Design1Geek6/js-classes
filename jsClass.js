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

const bunWarmer = new BunWarmer(false, 150)
const fryer = new Fryer(false)

console.log(fryer.display(), 'That is', bunWarmer.switchPower(), 'all the way to', bunWarmer.tempLevel(300), 'So', fryer.switchPower(),'it is... HOT! HOT! HOT!')

