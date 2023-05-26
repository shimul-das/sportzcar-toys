// // import React, { useContext, useEffect, useState } from 'react'
// // import { useLoaderData, useNavigate } from 'react-router-dom';
// // import { AuthContext } from '../Providers/AuthProvider';
// // import AllToysrow from './AllToysrow';

// // const AllToys = () => {
// //     useEffect(()=>{
// //         document.title="Sportz Car | All Toys"
// //       })
// //     const alltoys=useLoaderData();
// //   return (
// //     <div className='w-[90%] mx-auto'>
// //     <h2 className='text-3xl text-center p-5 text-cyan-500'>All Total Products :{alltoys.length}</h2>
// //     <div className="overflow-x-auto w-full">
// //         <table className="table w-full">
// //             {/* head */}
// //             <thead>
// //                 <tr>
// //                     <th className='text-xl'>Image</th>
// //                     <th className='text-xl'>Seller Name</th>
// //                     <th className='text-xl'>Toy Name</th>
// //                     <th className='text-xl'>Sub Category</th>
// //                     <th className='text-xl'>Price</th>
// //                     <th className='text-xl'>Available Quantity</th>
// //                     <th className='text-xl'>Action</th>
// //                 </tr>
// //             </thead>
// //             <tbody>
// //                 {
// //                     alltoys.map(toy => <AllToysrow key={toy._id} toy={toy} ></AllToysrow >)
// //                 }
// //             </tbody>
// //         </table>
// //     </div>
// // </div>
// //   )
// // }

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import AllToysrow from './AllToysrow';

const AllToys = () => {
    useEffect(() => {
        document.title = "Sportz Car | All Toys";
    });

    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const [alltoys, setAllToys] = useState([]);
    const [page, setPage] = useState(1); // Current page number
    const [searchQuery, setSearchQuery] = useState('');

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1); // Increment the page number
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        setPage(1); // Reset the page number when performing a new search
    };

    const itemsPerPage = 20;
    const startIndex = (page - 1) * itemsPerPage;
    const filteredToys = alltoys.filter(toy =>
        toy.tname && toy.tname.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const endIndex = Math.min(startIndex + itemsPerPage, filteredToys.length);

    //   useEffect(() => {
    //     // Fetch data from the server based on the page number and search query
    //     fetch(`https://sportzcar-server.vercel.app/alltoys?page=${page}`)
    //       .then(response => response.json())
    //       .then(data => setAllToys(data))
    //       .catch(error => console.log(error));
    //   }, [page, searchQuery]);
    useEffect(() => {
        // Fetch data from the server based on the page number and search query
        fetch(`https://sportzcar-server.vercel.app/alltoys?page=${page}`)
            .then(response => response.json())
            .then(data => {
                // Check if it's the first page, then set the data directly
                if (page === 1) {
                    setAllToys(data);
                } else {
                    // Append the new data to the existing array
                    setAllToys(prevToys => [...prevToys, ...data]);
                }
            })
            .catch(error => console.log(error));
    }, [page, searchQuery]);





    return (
        <div className="w-[90%] mx-auto">
            <h2 className="text-3xl text-center p-5 text-cyan-500">All Total Products: {filteredToys.length}</h2>
            <div className="flex justify-center mb-4">
                <input
                    type="text"
                    placeholder="Search by toy name"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="border border-gray-300 px-4 py-2 rounded-md"
                />
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-xl">Image</th>
                            <th className="text-xl">Seller Name</th>
                            <th className="text-xl">Toy Name</th>
                            <th className="text-xl">Sub Category</th>
                            <th className="text-xl">Price</th>
                            <th className="text-xl">Available Quantity</th>
                            <th className="text-xl">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredToys.slice(startIndex, endIndex).map(toy => (
                            <AllToysrow key={toy._id} toy={toy} />
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4">
                <button className="btn btn-primary mt-4" onClick={handleLoadMore}>
                    Load More
                </button>
            </div>
        </div>
    );
};

export default AllToys;


