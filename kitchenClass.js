'use strict'

class Kitchen {
    constructor(bunWarmer, fryer) {
        this.bunWarmer = bunWarmer
        this.fryer = fryer
    }
}

class Appliance {
    constructor(hasPower) {
        this.hasPower = hasPower
    }
    switchPower() {
        this.hasPower = !this.hasPower
        return this.hasPower
    }
}

class BunWarmer extends Appliance {
    constructor(hasPower, temp) {
        super(hasPower)
        this.temp = temp
    }

    tempLevel(temp) {
        this.temp = temp
        return this.temp + ' Degrees.'
    }

}

class Fryer extends Appliance {
    constructor(hasPower, message) {
        super(hasPower)
        this.message = message
    }

    display() {
        this.message
        return this.message = 'You Turn Me On!'
    }
}

export {Kitchen, BunWarmer, Fryer}

