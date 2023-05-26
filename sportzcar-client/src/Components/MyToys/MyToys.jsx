// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import MyToysrow from './MyToysrow';
// import { AuthContext } from '../Providers/AuthProvider';

// const MyToys = () => {
//     useEffect(()=>{
//         document.title="Sportz Car | My Toys"
//       })
//     const navigate=useNavigate()
//     const { user } = useContext(AuthContext)
//     const [mytoys, setmytoys] = useState([]);
//     const url = `https://sportzcar-server.vercel.app/mytoys?semail=${user?.email}`;
//     useEffect(() => {
//         fetch(url, {
//             method: 'GET',
//             headers: {
//                 authorization: `Bearer ${localStorage.getItem('car-access-token')}`
//             }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if(!data.error){
//                 setmytoys(data)
//                 }
//                 else{
//                     navigate('/')
//                 }
//             })
//             , []
//     })


//   return (
//     <div className='w-[90%] mx-auto'>
//             <h2 className='text-3xl text-center p-5 text-cyan-500'>My Total Product :{mytoys.length}</h2>
//             <div className="overflow-x-auto w-full">
//                 <table className="table w-full">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th>
//                             </th>
//                             <th className='text-xl'>Image</th>
//                             <th className='text-xl'>Product Name</th>
//                             <th className='text-xl'>Ratting</th>
//                             <th className='text-xl'>Price</th>
//                             <th className='text-xl'>Quantity</th>
//                             <th className='text-xl'>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             mytoys.map(mytoy => <MyToysrow key={mytoy._id} mytoy={mytoy} ></MyToysrow>)
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//   )
// }

// export default MyToys


import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyToysrow from './MyToysrow';
import { AuthContext } from '../Providers/AuthProvider';

const MyToys = () => {
  useEffect(() => {
    document.title = 'Sportz Car | My Toys';
  });

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [mytoys, setmytoys] = useState([]);
  const [sort, setSort] = useState('asc'); // Default sorting order

  const url = `https://sportzcar-server.vercel.app/mytoys?semail=${user?.email}&sort=${sort}`;

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('car-access-token')}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setmytoys(data);
        } else {
          navigate('/');
        }
      });
  }, [url, navigate]);

  const handleSortChange = e => {
    setSort(e.target.value);
  };

  return (
    <div className="w-[90%] mx-auto">
      <h2 className="text-3xl text-center p-5 text-cyan-500">My Total Product: {mytoys.length}</h2>
      <div className="overflow-x-auto w-full">
        <div className="mb-2 text-right text-2xl p-2 m-2 text-green-700">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" className="ml-2" value={sort} onChange={handleSortChange}>
            <option value="asc">Price (Low to High)</option>
            <option value="desc">Price (High to Low)</option>
          </select>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-xl">Image</th>
              <th className="text-xl">Product Name</th>
              <th className="text-xl">Rating</th>
              <th className="text-xl">Price</th>
              <th className="text-xl">Quantity</th>
              <th className="text-xl">Action</th>
            </tr>
          </thead>
          <tbody>
            {mytoys.map(mytoy => (
              <MyToysrow key={mytoy._id} mytoy={mytoy} setmytoys={setmytoys} mytoys={mytoys} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
