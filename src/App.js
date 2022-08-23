import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList/CardList';
import Aside from './components/Aside/Aside';

function App() {
  const [modules, setModules] = useState([]);
  useEffect(() => {
    //fetch modules from api and set it.
    setModules([
    {
      alias: 'HR',
      title: 'Human Resource Module',
      description: 'Manage your human resource in one place with ease and do much more..',
      price: 40000
    },
    {
      alias: 'Payroll',
      title: 'Payroll Module',
      description: 'Manage your payroll and salary in one place with ease and do much more..',
      price: 60000
    },
    {
      alias: 'Leave Management',
      title: 'Leave Management Module',
      description: 'Manage your Leave Management in one place with ease and do much more..',
      price: 30000
    },
    ]);
  }, []);
  return (
    <div className="App">
      <CardList modules={modules} />
      <Aside/>
    </div>
  );
}
export default App;
