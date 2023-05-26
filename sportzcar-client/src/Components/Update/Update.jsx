// import React from 'react'
// import { useContext } from 'react';
// import { useLoaderData } from 'react-router-dom'
// import { AuthContext } from '../Providers/AuthProvider';

// const Update = () => {
//     const { user } = useContext(AuthContext)
//     const toy=useLoaderData()
//     const {tname,tphoto,ratting,price,quantity,description,semail,sname}=toy
//     console.log(toy)
//     console.log(user)
//   const handleupdateproduct = (event) => {
//       event.preventDefault();
//       const form = event.target;
//       const tphoto = form.tphoto.value;
//       const scategory = form.scategory.value;
//       const price = form.price.value;
//       const ratting=form.ratting.value;
//       const quantity=form.quantity.value;
//       const description = form.description.value;

//       console.log(tphoto,tname,semail,sname,scategory,price,ratting,quantity,description)
//       const updatetoy = {
//           tphoto,
//           tname,
//           semail,
//           sname,
//           scategory,
//           price,
//           ratting,
//           quantity,
//           description
//       }
//       console.log(addtoy)
//       fetch('https://sportzcar-server.vercel.app/addtoy',{
//           method:"POST",
//           headers:{
//               "content-type": "application/json"
//           },
//           body:JSON.stringify(addtoy)
//       })
//           .then(res => res.json())
//           .then(data => {
//               console.log(data)
//               if(data.insertedId){
//                   alert("Booking placed Successfully")
//               }
//           })

//   }
//   return (
//     <div>
//         <div className="container mx-auto mt-10 text-xl">
//       <h1 className='text-3xl font-bold text-center'>Update Product:</h1>
//       <form onSubmit={handleaddproduct} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
// <div className="mb-4">
// <div className="flex flex-wrap -mx-3 mb-6">
//     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first_name">
//         Update Toy photo Url
//       </label>
//       <input defaultValue={tphoto} name='tphoto' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first_name" type="text" placeholder="Update Toy Photo Url" />
//     </div>
//     <div className="w-full md:w-1/2 px-3">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last_name">
//         Name
//       </label>
//       <input name='tname' disabled defaultValue={tname} className="appearance-none block w-full bg-gray-200 text-blue-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last_name" type="text" placeholder="Toy Name" />
//     </div>
//   </div>
//   <div className="flex flex-wrap -mx-3 mb-6">
//     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first_name">
//         Seller Name
//       </label>
//       <input name='sname' disabled defaultValue={sname} className="appearance-none block w-full bg-gray-200 text-blue-600 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first_name" type="text" placeholder="Seller Name" />
//     </div>
//     <div className="w-full md:w-1/2 px-3">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last_name">
//         Seller Email
//       </label>
//       <input name='semail' disabled defaultValue={semail}  className="appearance-none block w-full bg-gray-200 text-blue-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last_name" type="text" placeholder="Seller Email" />
//     </div>
//   </div>
//   <div className="flex flex-wrap -mx-3 mb-6">
//     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first_name">
//         Update Sub Category
//       </label>
//       <select name='scategory' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="scategory">
//         <option value="Normal Car">Normal Car</option>
//         <option value="Super Car">Super Car</option>
//         <option value="Ultra Super Car"> Ultra Super Car</option>
//         {/* Add more options as needed */}
//       </select>
//     </div>
//     <div className="w-full md:w-1/2 px-3">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last_name">
//         Update Price
//       </label>
//       <input name='price' defaultValue={price} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last_name" type="price" placeholder="Price" />
//     </div>
//   </div>
//   <div className="flex flex-wrap -mx-3 mb-6">
//     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
//        Update Ratting
//       </label>
//       <input name='ratting' defaultValue={ratting} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="text" placeholder="Ratting" />
//     </div>
//     <div className="w-full md:w-1/2 px-3">
//       <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
//         Update Available Quantity
//       </label>
//       <input name='quantity' defaultValue={quantity} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="tel" placeholder="Quantity" />
//     </div>
//   </div>
//   <div className="mb-6">
//     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
//       Update Description
//     </label>
//     <textarea defaultValue={description} name='description' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" rows="8" placeholder="Enter about toy"></textarea>
//   </div>
//           <div className="flex items-center justify-center">
//             <button onClick={handleupdatetoy}><input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"  value="Update Product Info" /></button>
//           </div>
//         </div>
//       </form>
//     </div>
//     </div>
//   )
// }

// export default Update
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { useEffect } from 'react';

const Update = () => {
    useEffect(()=>{
        document.title="Sportz Car | Update"
      })
    const { user } = useContext(AuthContext);
    const toy = useLoaderData();
    const {_id, tname, tphoto, ratting, price, quantity, description, semail, sname } = toy;
    console.log(toy);
    console.log(user);

    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const updatedTphoto = form.tphoto.value;
        const scategory = form.scategory.value;
        const updatedPrice = form.price.value;
        const updatedRatting = form.ratting.value;
        const updatedQuantity = form.quantity.value;
        const updatedDescription = form.description.value;

        console.log(updatedTphoto, tname, semail, sname, scategory, updatedPrice, updatedRatting, updatedQuantity, updatedDescription);

        const updatedToy = {
            tphoto: updatedTphoto,
            tname,
            semail,
            sname,
            scategory,
            price: updatedPrice,
            ratting: updatedRatting,
            quantity: updatedQuantity,
            description: updatedDescription
        };

        console.log(updatedToy);

        fetch(`https://sportzcar-server.vercel.app/update/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    alert('Toy details updated successfully');
                }
            })
            .catch(error => {
                console.log('Error updating toy details:', error);
            });
    };

    return (
        <div>
            <div className="container mx-auto mt-10 text-xl">
                <h1 className="text-3xl font-bold text-center">Update Product:</h1>
                <form
                    onSubmit={handleUpdateToy}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <div className="mb-4">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first_name">
                                    Update Toy photo Url
                                </label>
                                <input defaultValue={tphoto} name='tphoto' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first_name" type="text" placeholder="Update Toy Photo Url" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last_name">
                                    Name
                                </label>
                                <input name='tname' disabled defaultValue={tname} className="appearance-none block w-full bg-gray-200 text-blue-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last_name" type="text" placeholder="Toy Name" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first_name">
                                    Seller Name
                                </label>
                                <input name='sname' disabled defaultValue={sname} className="appearance-none block w-full bg-gray-200 text-blue-600 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first_name" type="text" placeholder="Seller Name" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last_name">
                                    Seller Email
                                </label>
                                <input name='semail' disabled defaultValue={semail} className="appearance-none block w-full bg-gray-200 text-blue-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last_name" type="text" placeholder="Seller Email" />
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
                                    Update Price
                                </label>
                                <input name='price' defaultValue={price} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last_name" type="price" placeholder="Price" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                    Update Ratting
                                </label>
                                <input name='ratting' defaultValue={ratting} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="text" placeholder="Ratting" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                                    Update Available Quantity
                                </label>
                                <input name='quantity' defaultValue={quantity} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="tel" placeholder="Quantity" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                                Update Description
                            </label>
                            <textarea defaultValue={description} name='description' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" rows="8" placeholder="Enter about toy"></textarea>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button>
                            <input
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
                                type="submit"
                                value="Update Product Info"
                            />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
