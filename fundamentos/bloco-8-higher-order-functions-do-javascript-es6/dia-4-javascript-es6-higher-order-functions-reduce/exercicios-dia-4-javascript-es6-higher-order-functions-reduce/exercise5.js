const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    return names.reduce((acc, curr) =>
       acc + curr.toLowerCase().split('').reduce((acumulator, current) => {
          if (current === 'a') return acumulator + 1;
          return acumulator;
       }, 0), 0);
  }

  console.log(containsA());