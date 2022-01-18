const fs = require('fs')

class Fs {
    constructor(dir) {
        this.dir = dir
    }

    read() {
        return fs.readFileSync(this.dir, { encoding: 'utf-8', flag: 'r' })
    }
}

module.exports = Fs