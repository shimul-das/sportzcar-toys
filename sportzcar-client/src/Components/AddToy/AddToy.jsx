import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'

const AddToy = () => {
  useEffect(() => {
    document.title = "Sportz Car | Add Toy"
  })
  const { user } = useContext(AuthContext)
  console.log(user)
  const handleaddproduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const tphoto = form.tphoto.value;
    const tname = form.tname.value;
    const semail = user?.email;
    const sname = user?.displayName;
    const scategory = form.scategory.value;
    const price = form.price.value;
    const ratting = form.ratting.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    console.log(tphoto, tname, semail, sname, scategory, price, ratting, quantity, description)
    const addtoy = {
      tphoto,
      tname,
      semail,
      sname,
      scategory,
      price,
      ratting,
      quantity,
      description
    }
    console.log(addtoy)
    fetch('https://sportzcar-server.vercel.app/addtoy', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(addtoy)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert("Toy Added Successfully")
        }
      })

  }
  return (
    <div className="container mx-auto mt-10 text-xl">
      <h1 className='text-3xl font-bold text-center'>Add New Product</h1>
      <form onSubmit={handleaddproduct} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first_name">
                Picture URL of the toy
              </label>
              <input name='tphoto' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first_name" type="text" placeholder="Toy Photo Url" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last_name">
                Name
              </label>
              <input name='tname' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last_name" type="text" placeholder="Toy Name" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first_name">
                Seller Name
              </label>
              <input name='sname' defaultValue={user.displayName} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first_name" type="text" placeholder="Seller Name" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last_name">
                Seller Email
              </label>
              <input name='semail' defaultValue={user.email} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last_name" type="text" placeholder="Seller Email" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first_name">
                Update Sub Category
              </label>
              <select name='scategory' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="scategory">
                <option value="Sports Car">Sports Car</option>
                <option value="Truck">Truck</option>
                <option value="Mini Police Car">Mini Police Car</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last_name">
                Price
              </label>
              <input name='price' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last_name" type="price" placeholder="Price" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                Ratting
              </label>
              <input name='ratting' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="text" placeholder="Ratting" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                Available Quantity
              </label>
              <input name='quantity' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="tel" placeholder="Quantity" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
              Description
            </label>
            <textarea name='description' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" rows="8" placeholder="Enter about toy"></textarea>
          </div>
          <div className="flex items-center justify-center">
            <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full" type="submit" value="Add a Product" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddToy