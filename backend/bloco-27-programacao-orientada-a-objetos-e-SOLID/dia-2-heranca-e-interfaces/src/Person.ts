export default class Person {
    private _name: string = '';
    private _birthDate: Date;
    constructor(name: string, birthDate: Date) {
        this.name = name;
        this._birthDate = birthDate;
    }

    get name() {
        return this._name;
    }

    set name(newValue: string) {
        if (newValue.length < 3) return;
        this._name = newValue;

    }

    get birthDate(): Date {
        return this._birthDate;
    }

    set birthDate(value: Date) {
        this.validateBirthDate(value);
        this._birthDate = value;
    }

    static getAge(value: Date): number {
        const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
    }

    private validateBirthDate(value: Date): void {
        if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
        if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
    }

}