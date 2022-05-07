import './App.css';
import React from 'react';

const Task = (value) => {
  return <li key={value}>{value}</li>;
};
const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

function App() {
  return (
    <ul>
      { tarefas.map((tarefa) => Task(tarefa))}
    </ul>
  );
}

export default App;
