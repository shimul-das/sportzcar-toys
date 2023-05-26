import React from 'react';
import one from './../../assets/image/age/one_1.jpg';
import two from './../../assets/image/age/two_2.jpg';
import three from './../../assets/image/age/three_3.jpg';
import four from './../../assets/image/age/four_4.jpg';
import five from './../../assets/image/age/five_5.jpg';







const ShopByAge = () => {
  const ageGroups = [
    { range: '0-2', image: one, description: 'Toys for infants and toddlers.' },
    { range: '2-5', image: two, description: 'Toys  kindergarten kids.' },
    { range: '6-8', image: three, description: 'Toys for  school children.' },
    { range: '9-11', image: four, description: 'Toys for preteens.' },
    { range: '11+', image: five, description: 'Toys for teenagers.' },
  ];

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-center text-blue-700 p-5 text-4xl">Shop By Age!!</h2>
      <div className="flex flex-wrap -mx-2">
        {ageGroups.map((ageGroup) => (
          <div
            key={ageGroup.range}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4"
          >
            <div className="bg-teal-200 shadow-lg rounded-lg p-4 text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-lg font-bold mb-2">Age Group: {ageGroup.range}</h3>
              <img
                className="w-32 h-32 mx-auto mb-4"
                src={ageGroup.image}
                alt={`Age Group ${ageGroup.range}`}
              />
              <p className='text-xl'>{ageGroup.description}</p>
              <a href={`/shop/age/${ageGroup.range}`} className="text-blue-700 font-semibold hover:text-blue-700">Shop Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByAge;
