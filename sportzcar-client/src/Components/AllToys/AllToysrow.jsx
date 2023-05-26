import React from 'react';
import { Link } from 'react-router-dom';

const AllToysrow = ({toy}) => {
    const {sname,tname,tphoto,_id,scategory,quantity,price}=toy
  return (
    <tr className= "text-2xl bg-blue-500">
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={tphoto} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </div>
    </td>
    <td>{sname}</td>
    <td>{tname}</td>
    <td>{scategory}</td>
    <td>{price}</td>
    <td>{quantity}</td>
    <th>
      <Link to={`/toy/${_id}`}><button  className="btn btn-ghost btn-md text-white text-xl bg-blue-700 p-2">View Details</button></Link>
    </th>
  </tr>
  )
}

export default AllToysrow