class Student {
    private _enrollment: string;
    private _name: string;
    private _examsGrades: number[];
    private _tasksGrades: number[];
    constructor(
        enrollment: string,
        name: string,
    ) {
        this._enrollment = enrollment;
        this._name = name;
        this._examsGrades = [];
        this._tasksGrades = [];
    }

    get enrollment(): string {
        return this._enrollment;
    }

    set enrollment(value: string) {
        this._enrollment = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
        }

        this._name = value;
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
}


const student1 = new Student('144134', 'CABRALOKO');

student1.examsGrades = [10,10,10,10]
student1.tasksGrades = [8,8]


const nota = student1.averageGrade();
console.log(nota)