// import React from 'react';
// import { Link } from 'react-router-dom';

// const MyToysrow = ({ mytoy }) => {
//   const { _id, tname, tphoto, ratting, price, quantity } = mytoy;

//   const handleDelete = (id) => {
//     const processed = window.confirm("Are you sure you want to delete it");
//     if (processed) {
//       fetch(`https://sportzcar-server.vercel.app/toy/${id}`, {
//         method: "DELETE"
//       })
//         .then(res => res.json())
//         .then(data => {
//           console.log(data);
//           if (data.deletedCount) {
//             alert("Deleted successfully");
//           }
//         });
//     }
//   };


//   return (
//     <tr className="text-2xl bg-blue-500">
//       <th>
//         <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//       </th>
//       <td>
//         <div className="flex items-center space-x-3">
//           <div className="avatar">
//             <div className="mask mask-squircle w-12 h-12">
//               <img src={tphoto} alt="Avatar Tailwind CSS Component" />
//             </div>
//           </div>
//         </div>
//       </td>
//       <td>{tname}</td>
//       <td>{ratting}</td>
//       <td>{quantity}</td>
//       <td>{price}</td>
//       <th>
//         <Link to={`/update/${_id}`}><button  className="btn btn-ghost btn-md text-white text-xl bg-blue-700 p-2">Update</button></Link>
//       </th>
//     </tr>
//   );
// };

// export default MyToysrow;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyToysrow = ({ mytoy, setmytoys,mytoys }) => {
  const { _id, tname, tphoto, ratting, price, quantity } = mytoy;

  const handleDelete = (id) => {
    const processed = window.confirm("Are you sure you want to delete it");
    if (processed) {
      fetch(`https://sportzcar-server.vercel.app/toy/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount>0) {
            alert("Deleted successfully");
            // Update the toys list after successful deletion
            const remaining = mytoys.filter(deleted => deleted._id !== id);
            setmytoys(remaining)

          }
        });
    }
  };


  return (
    <tr className="text-2xl bg-blue-500">
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={tphoto} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{tname}</td>
      <td>{ratting}</td>
      <td>{price}$</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/update/${_id}`}>
          <button className="btn btn-ghost btn-md text-white text-xl bg-blue-700 p-2">Update</button>
        </Link>
      </th>
    </tr>
  );
};

export default MyToysrow;

