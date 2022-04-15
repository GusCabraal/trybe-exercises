const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  let { nationality = 'brazilian'} = person;
  console.log(nationality);
  console.log(person);