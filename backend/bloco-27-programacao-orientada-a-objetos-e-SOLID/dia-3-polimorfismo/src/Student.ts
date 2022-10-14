import Enrollable from "./Enrollable";
import Person from "./Person";

export default class Student extends Person implements Enrollable {
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
        if (value.length < 16 ) return;
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

    sumGrades(): number {
        const total = [...this._examsGrades, ...this._tasksGrades]
            .reduce((acc, curr) => acc + curr, 0);

        return total;

    }
    sumAverageGrade(): number {
        const avgGrade = this.sumGrades() / [...this._examsGrades, ...this._tasksGrades].length;
        return avgGrade;
    }

    generateEnrollment(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

        return `STU${randomStr}`;
    }
}