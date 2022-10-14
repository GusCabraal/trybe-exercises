export default class Subject {
    private _name: string = '';
    constructor(name: string) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(newValue: string) {
        if (newValue.length < 3) return;
        this._name = newValue;
    }

}