
// export default Slider;
import { useState } from 'react';
import slide1 from './../../assets/image/slide-1.jpg';
import slide2 from './../../assets/image/slide-2.jpg';
import slide3 from './../../assets/image/slide-3.jpg';
import slide4 from './../../assets/image/slide-4.jpg';

function Slider() {
  const [index, setIndex] = useState(0);

  return (
    <div className="carousel w-[90%] h-[80vh] mx-auto relative">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slide1} className="w-full" alt="Slide 1" />
        <div className="w-[90%] mx-auto absolute inset-0 flex flex-col justify-center items-center">
          <div className="bg-black bg-opacity-50 px-6 py-4 text-center text-white">
            <h2 className="text-3xl mb-4">Unleash Your Imagination</h2>
            <p className="text-xl text-emerald-100">Discover our collection of high-performance sports cars designed to deliver unparalleled excitement on the road. Get ready to feel the adrenaline rush as you unleash their power and agility.</p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle btn-info">❮</a>
          <a href="#slide2" className="btn btn-circle btn-info">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={slide2} className="w-full" alt="Slide 2" />
        <div className="w-[90%] mx-auto absolute inset-0 flex flex-col justify-center items-center">
          <div className="bg-black bg-opacity-50 px-6 py-4 text-center text-white">
            <h2 className="text-3xl mb-4">Quality Craftsmanship</h2>
            <p className="text-xl text-emerald-100">Indulge in the sleek and striking aesthetics of our sports cars that effortlessly blend form with function. From their aerodynamic contours to the luxurious interiors, these vehicles exude elegance and sophistication.</p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle btn-info">❮</a>
          <a href="#slide3" className="btn btn-circle btn-info">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={slide3} className="w-full" alt="Slide 3" />
        <div className="w-[90%] mx-auto absolute inset-0 flex flex-col justify-center items-center">
          <div className="bg-black bg-opacity-50 px-6 py-4 text-center text-white">
            <h2 className="text-3xl mb-4">Learning Through Play</h2>
            <p className="text-xl text-emerald-100">Immerse yourself in the precision engineering that goes into each of our sports cars. With cutting-edge technology, superior craftsmanship, and meticulous attention to detail, our vehicles are engineered to deliver exceptional performance and handling.</p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle btn-info">❮</a>
          <a href="#slide4" className="btn btn-circle btn-info">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={slide4} className="w-full" alt="Slide 4" />
        <div className="w-[90%] mx-auto absolute inset-0 flex flex-col justify-center items-center">
          <div className="bg-black bg-opacity-50 px-6 py-4 text-center text-white">
            <h2 className="text-3xl mb-4">Safe and Reliable Fun</h2>
            <p className="text-xl text-emerald-100">At our toy store, safety is our top priority. Our toys undergo rigorous testing to meet the highest safety standards, giving parents peace of mind while their children enjoy hours of safe and reliable fun.</p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle btn-info">❮</a>
          <a href="#slide1" className="btn btn-circle btn-info">❯</a>
        </div>
      </div>
    </div>
  );
}

export default Slider;


