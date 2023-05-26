
// // export default Toyscard;
// import React from 'react';
// import { Button, Card } from 'react-bootstrap';
// import { Link, useLoaderData } from 'react-router-dom';

// const Toyscard = ({ toy }) => {
//   const { _id, tname, ratting, scategory, sname, tphoto, price } = toy;

//   return (
//     <div className="card w-96 bg-base-100 shadow-xl">
//       <figure>
//         <img src={tphoto} alt="Shoes" className="w-250 h-250" style={{ width: 250, height: 250 }} />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">
//           {tname}
//           <div className="badge badge-secondary">NEW</div>
//         </h2>
//         <p className="text-2xl">
//           <span className="text-sky-600">Price:</span> {price}$
//         </p>
//         <p className="text-xl">
//           <span className="text-lime-600">Rating:</span> {ratting}
//         </p>
//         <div className="card-actions justify-center">
//           <Link to={`/toy/${_id}`}>
//             <Button className='btn-primary' >View Details</Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Toyscard;

import React from 'react';
import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Toyscard = ({ toy }) => {
  const { _id, tname, ratting, scategory, sname, tphoto, price } = toy;
  const location = useLocation();
  const navigate = useNavigate();
  const {user}=useContext(AuthContext)

  const handleViewDetails = () => { // Replace this with your actual condition to check if the user is logged in

    if (!user) {
      // Notify the user with a message (e.g., using a toast library)
      alert('You have to log in first to view details');

      // Redirect the user to the login page
      // navigate('/login');
    } else {
      // User is logged in, navigate to the toy details page
      navigate(`/toy/${_id}`);
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={tphoto} alt="Shoes" className="w-250 h-250" style={{ width: 250, height: 250 }} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {tname}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-2xl">
          <span className="text-sky-600">Price:</span> {price}$
        </p>
        <p className="text-xl">
          <span className="text-lime-600">Rating:</span> {ratting}
        </p>
        <div className="card-actions justify-center">
          <Link to={`/toy/${_id}`}>
            <Button className="btn-primary" onClick={handleViewDetails}>
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Toyscard;



