import Employee from "./Employee";
import Person from "./Person";
import Subject from "./Subject";

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration: string;
  private _admissionDate: Date;
  constructor(
    name: string,
    birthDate: Date,
    subject: Subject,
    private _salary: number
  ) {
    super(name, birthDate);

    this._subject = subject;
    this.salary = _salary;
    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error("O salário não pode ser negativo.");

    this._salary = value;
  }

  get registration(): string {
    return this.registration;
  }

  set registration(value: string) {
    this.registration = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    this._admissionDate = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ""
    );

    return `REG${randomStr}`;
  }
}