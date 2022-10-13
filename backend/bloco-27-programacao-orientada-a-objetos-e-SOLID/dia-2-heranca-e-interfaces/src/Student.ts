import Person from "./Person";

export default class Student extends Person {
    private _enrollment: string;
    private _examsGrades: number[];
    private _tasksGrades: number[];
    constructor(
        name: string,
        birthDate: Date,
    ) {
        super(name, birthDate);
        this.name = name
        this.birthDate = birthDate;
        this._enrollment = this.generateEnrollment();
        this._examsGrades = [];
        this._tasksGrades = [];
    }

    get enrollment(): string {
        return this._enrollment;
    }

    set enrollment(value: string) {
        this._enrollment = value;
    }

    get examsGrades() {
        return this._examsGrades;
    }

    set examsGrades(newValue: number[]) {
        if (newValue.length === 4) {
            this._examsGrades = newValue
        } else {
            console.log("O estudante deve ter 4 notas de provas.")
        }
    }

    get tasksGrades() {
        return this._tasksGrades;
    }

    set tasksGrades(newValue: number[]) {
        if (newValue.length === 2) {
            this._tasksGrades = newValue
        } else {
            console.log("O estudante deve ter 2 notas de trabalhos.")
        }
    }

    totalGrade(): number {
        const total = [...this._examsGrades, ...this._tasksGrades]
            .reduce((acc, curr) => acc + curr, 0);

        return total;

    }
    averageGrade(): number {
        const avgGrade = this.totalGrade() / [...this._examsGrades, ...this._tasksGrades].length;
        return avgGrade;
    }

    generateEnrollment(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

        return `STU${randomStr}`;
    }
}
