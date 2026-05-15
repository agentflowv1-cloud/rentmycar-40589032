import React from 'react';
import { RentalType } from '../types/Rental';

interface Props {
  rental: RentalType;
}

function Rental({ rental }: Props) {
  return (
    <div className='bg-white rounded-lg shadow-md p-4'
    >
      <h2 className='text-xl font-bold mb-2'>{rental.name}</h2>
      <p className='text-gray-500 mb-2'>{rental.description}</p>
      <ul className='list-none mb-4'
      >
        <li className='text-gray-500 mb-1'>Price: ${rental.price}/day</li>
        <li className='text-gray-500 mb-1'>Capacity: {rental.capacity} passengers</li>
        <li className='text-gray-500 mb-1'>Type: {rental.type}</li>
      </ul>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >Book Now
      </button>
    </div>
  );
}

export default Rental;
