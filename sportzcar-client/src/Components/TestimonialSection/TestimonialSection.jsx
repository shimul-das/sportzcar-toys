import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import one from './../../assets/image/client/one.png';
import two from './../../assets/image/client/two.png';
import three from './../../assets/image/client/three.jpg';



const TestimonialSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section className="testimonial-section bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-8 text-blue-700">What Our Happy Clients Say!!</h2>
        <div className="flex flex-col items-center">
          <div className="testimonial" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center mb-4">
                <img src={one} alt="Client 1" className="rounded-full w-8 h-8 mr-2" />
                <p className="text-gray-800 font-semibold">Emily Johnson</p>
              </div>
              <p className="text-lg text-gray-800">
                "The toys I purchased from this store are amazing. My kids love them, and the quality is outstanding."
              </p>
            </div>
          </div>
          <div className="testimonial" data-aos="fade-up" data-aos-delay="600">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center mb-4">
                <img src={two} alt="Client 2" className="rounded-full w-8 h-8 mr-2" />
                <p className="text-gray-800 font-semibold">John Smith</p>
              </div>
              <p className="text-lg text-gray-800">
                "I have never seen such a diverse collection of toys in one place. Highly recommended!"
              </p>
            </div>
          </div>
          <div className="testimonial" data-aos="fade-up" data-aos-delay="800">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img src={three} alt="Client 3" className="rounded-full w-8 h-8 mr-2" />
                <p className="text-gray-800 font-semibold">Sarah Anderson</p>
              </div>
              <p className="text-lg text-gray-800">
                "The customer service provided by this store is exceptional. They were very helpful in guiding me to choose the perfect toys for my kids."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
