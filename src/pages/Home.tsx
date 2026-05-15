import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <h1 className="text-3xl font-bold mb-4">Welcome to RentMyCar</h1>
      <p className="text-lg mb-6">RentMyCar is a car rental website that offers a wide range of cars for rent.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Rent a Car</button>
    </div>
  );
};

export default Home;