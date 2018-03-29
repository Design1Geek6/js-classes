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

    tempLevel() {
        this.temp
        return this.temp + ' Degrees'
    }
}

class Fryer {
    switchPower() {
        this.hasPower = !this.hasPower
        return this.hasPower
    }

    instruction() {
        this.message
        return this.message = 'Enjoy'
    }
}

Kitchen = new BunWarmer (this.hasPower, this.temp)
Kitchen = new Fryer (this.hasPower, this.message, )
