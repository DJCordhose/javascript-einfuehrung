import Person from './v5-Person';

export default class Programmer extends Person {
    constructor(name, language) {
        super(name);
        this.language = language;
    }
    code() {
        return this.name + " codes in " + this.language;
    }
    get name() {
        return `Programmer ${super.name}`;
    }
}
