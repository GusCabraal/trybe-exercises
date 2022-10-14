import Teacher from "./Teacher";

export default class Evaluation {
    private _score: number;
    private _teacher: Teacher;
    private _type: 'prova' | 'trabalho';
    constructor(
        score: number,
        teacher: Teacher,
        type: 'prova' | 'trabalho') {
        this._teacher = teacher;
        this.score = score;
        this._teacher = teacher;
    }

    get score(): number {
        return this._score;
      }
    
      set score(value: number) {
        if(value < 0) throw new Error('A pontuação não pode ser positiva.');
        if(this._type === 'prova' && value < 25) this._score = value;
        if(this._type === 'trabalho' && value < 50) this._score = value;
      }
    
    get type() {
        return this._type;
      }
    
      set type(value: 'prova' | 'trabalho') {
        this._type = value;
      }
    
}