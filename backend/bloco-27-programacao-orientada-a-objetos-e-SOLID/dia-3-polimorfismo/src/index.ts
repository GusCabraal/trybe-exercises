import Person from './Person';
import Student from './Student';
import Teacher from './Teacher';
import Subject from './Subject';

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
console.log(carolina);


const math = new Subject('Matemática');
const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), math, 2000);
console.log(marta);