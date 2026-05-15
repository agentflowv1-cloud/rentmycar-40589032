import React from 'react';
import { Rental } from './components/Rental';
import { rentals } from './data/rentals';
import './App.css';

function App() {
  return (
    <div className='max-w-5xl mx-auto p-4 pt-6 md:p-6 lg:p-8 mb-8 flex flex-col items-center'
    >
      <h1 className='text-3xl font-bold mb-4'>Car Rentals</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
      >
        {rentals.map((rental) => (
          <Rental key={rental.id} rental={rental} />
        ))}
      </div>
    </div>
  );
}

export default App;
