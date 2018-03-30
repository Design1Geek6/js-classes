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
        return this.temp + ' Degrees'
    }

}



class Fryer {
    switchPower() {
        console.log('fryer Switch has Power', this.hasPower)
        this.hasPower = !this.hasPower
        return this.hasPower
        console.log('fryer Switch Does Not Power', this.hasPower)
    }

    constructor(hasPower, message) {
        this.hasPower = hasPower
        this.message = message
    }


    instruction() {
        this.message
        return this.message = 'Enjoy'
    }
}

const bunWarmer = new BunWarmer(false, 150)
const fryer = new Fryer(false, 'turn on')

console.log(bunWarmer.switchPower(), bunWarmer.tempLevel(300), fryer.switchPower(), fryer.instruction())

