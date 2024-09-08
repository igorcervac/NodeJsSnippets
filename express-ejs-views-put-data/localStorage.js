var { writeFileSync, existsSync, readFileSync, unlink } = require('fs');

class LocalStorage {

    constructor(fileName="localStorage.json") {
        this.fileName = fileName;
        if (existsSync(this.fileName)) {
            var txt = readFileSync(this.fileName);
            this.items = JSON.parse(txt);
        } else {
            this.items = {};
        }
    }

    get length() {
        return Object.keys(this.items).length;
    }

    getItem(key) {
        return this.items[key];
    }

    async setItem(key, value) {
        this.items[key] = value;
        this.writeItemsToLocalstorage();
    }

    async removeItem(key) {
        delete this.items[key];
        this.writeItemsToLocalstorage();
    }

    key(index) {
        let ind = Number(index);
        let keys = Object.keys(this.items);
        return this.items[keys[ind]];
    }

    clear() {
        this.items = {};
        unlink(this.fileName, () => {
            console.log('localStorage file is removed');
        })
    }

    writeItemsToLocalstorage() {
        writeFileSync(this.fileName, JSON.stringify(this.items), error => {
            if (error) {
                console.log('Error occurred during writing file');
            }
        })
    }

    print() {
        console.log(this.items);
    }
}

module.exports = LocalStorage;