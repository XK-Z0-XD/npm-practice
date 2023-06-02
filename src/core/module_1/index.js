/**
 * @class Animal
 * @classdesc Animal Class
 * 
 */
export class Animal {
    /**
     * 
     * @param {string} name 
     * @param {string} sound 
     */
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    /**
     * 
     * @returns {string}
     */
    getName() { return this.name; }
        /**
         * 
         * @param {string} name 
         */
    setName(name) { this.name = name; }
        /**
         * @method getSound
         * @returns {string}
         */
    getSound() { return this.sound = sound; }
        /**
         * 
         * @param {string} sound 
         */
    setSound(sound) { this.sound = sound; }
        /**
         * @method playSound
         */
    playSound() {
        console.log(sound);
    }
}