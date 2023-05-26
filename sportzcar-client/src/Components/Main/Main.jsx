
// import React from 'react';
// import Toyscard from '../Toysscard/Toyscard';
// import { useLoaderData } from 'react-router-dom';
// import Slider from '../Slider/Slider';
// import SocialChef_Number from '../SocialChef_Number/SocialChef_Number';
// import PhotoGallery from '../Service/Service';
// import ShopByAge from '../Agebyshop/Agebyshop';
// import Gallery from '../Gallery/Gallery';
// import TestimonialSection from '../TestimonialSection/TestimonialSection';
// import { useEffect } from 'react';

// const Main = () => {
//   const toys = useLoaderData();
//   useEffect(() => {
//     document.title = "Sportz Car | Home"
//   });

//   return (
//     <div>
//       <div className='slider'>
//         <Slider />
//       </div>
      
//       <div className="w-[90%] flex justify-center mx-auto">
//         <div className="w-full max-w-screen-xl">
//           <h2 className="text-center text-blue-700 p-5 text-4xl">Our New Arrival Car Toys</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto relative">
//             {toys.map((toy) => (
//               <div key={toy._id} className="flex justify-center">
//                 <Toyscard toy={toy} toys={toys} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <ShopByAge></ShopByAge>
//       <Gallery></Gallery>
//       <TestimonialSection></TestimonialSection>
//     </div>
//   );
// };

// export default Main;

import React, { useState, useEffect } from 'react';
import Toyscard from '../Toysscard/Toyscard';
import { useLoaderData } from 'react-router-dom';
import Slider from '../Slider/Slider';
import ShopByAge from '../Agebyshop/Agebyshop';
import Gallery from '../Gallery/Gallery';
import TestimonialSection from '../TestimonialSection/TestimonialSection';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Main = () => {
  const toys = useLoaderData();
  useEffect(() => {
    document.title = "Sportz Car | Home";
  });

  const [selectedTab, setSelectedTab] = useState(0);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    const uniqueSubCategories = [...new Set(toys.map((toy) => toy.scategory))];
    setSubCategories(uniqueSubCategories);
  }, [toys]);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <div>
      <div className='slider'>
        <Slider />
      </div>
      
      <div className="w-[90%] flex justify-center mx-auto">
        <div className="w-full max-w-screen-xl">
          <h2 className="text-center text-blue-700 p-5 text-4xl">Our New Arrival Car Toys</h2>
          
          <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
            <TabList className="text-2xl text-center m-2 text-emerald-800">
              {subCategories.map((category, index) => (
                <Tab key={index}>{category}</Tab>
              ))}
            </TabList>
            
            {subCategories.map((category, index) => (
              <TabPanel key={index}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto relative">
                  {toys
                    .filter((toy) => toy.scategory === category)
                    .map((toy) => (
                      <div key={toy._id} className="flex justify-center">
                        <Toyscard toy={toy} toys={toys} />
                      </div>
                    ))}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>

      <ShopByAge></ShopByAge>
      <Gallery></Gallery>
      <TestimonialSection></TestimonialSection>
    </div>
  );
};

export default Main;


