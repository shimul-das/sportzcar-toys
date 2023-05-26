import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';

const Detailstoy = () => {
  useEffect(()=>{
    document.title="Sportz Car | Toy Details"
  })
  const toy = useLoaderData();
  const { _id, tphoto,tname,price,ratting,sname,semail,quantity,description } = toy
  console.log(_id)

  return (

    <div className="bg-white w-[90%] mx-auto rounded-lg shadow-lg pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src={tphoto} alt="Toy" className="object-cover h-full w-full rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4 ">Toy Details</h1>
          <p className="text-gray-600 mb-4 text-3xl font-semibold">{tname}</p>
          <p className="text-gray-600 text-xl mb-4"><span className='text-2xl  text-cyan-600'>Price:</span> {price}$</p>
          <p className="text-gray-600 text-xl mb-4"><span className='text-2xl  text-cyan-600'>Seller Name:</span> {sname}</p>
          <p className="text-gray-600 text-xl mb-4"><span className='text-2xl  text-cyan-600'>Seller Email:</span> {semail}$</p>
          <p className="text-gray-600 text-xl mb-4"><span className='text-2xl  text-cyan-600'>Ratting:</span> {ratting}</p>
          <p className="text-gray-600 text-xl mb-4"><span className='text-2xl  text-cyan-600'>Quantity:</span> {quantity}</p>
          <p className="text-gray-600 text-xl mb-4"><span className='text-2xl  text-orange-600'>Description:</span> {description}</p>
        </div>
      </div>
    </div>


  )
}

export default Detailstoy