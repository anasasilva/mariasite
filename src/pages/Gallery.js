import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from '../components/Navbar';

import gallery1 from '../assets/gallery/gallery1.jpg';
import gallery2 from '../assets/gallery/gallery2.jpg';
import gallery3 from '../assets/gallery/gallery3.jpg';
import gallery4 from '../assets/gallery/gallery4.jpg';
import gallery5 from '../assets/gallery/gallery5.jpg';
import gallery6 from '../assets/gallery/gallery6.jpg';
import gallery7 from '../assets/gallery/gallery7.jpg';
import gallery8 from '../assets/gallery/gallery8.jpg';


function Gallery() {


  return (
    <div >
      <Navbar />
      <div className="mt">
        <div className="row w-100 d-md-flex d-none mx-0">
          <div className="col-4 pr-3 pl-0">
            <img className="img-gallery" src={gallery1}/>
            <img className="img-gallery" src={gallery2}/>
          </div>
          <div className="col pr-3 pl-0">
            <img className="img-gallery" src={gallery3}/>
            <img className="img-gallery" src={gallery4}/>
            <img className="img-gallery" src={gallery5}/>
          </div>
          <div className="col-3 pl-0 pr-0">
            <img className="img-gallery" src={gallery6}/>
            <img className="img-gallery" src={gallery7}/>
            <img className="img-gallery" src={gallery8}/>
          </div>
        </div>
        <div className="d-md-none">
          <Carousel fade controls={false} indicators={false} interval={2500}>
            <Carousel.Item>
              <div className="all-screen">
                <img className="all-screen" src={gallery1}/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="all-screen">
              <img className="all-screen" src={gallery2}/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="all-screen">
              <img className="all-screen" src={gallery3}/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="all-screen">
              <img className="all-screen" src={gallery4}/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="all-screen">
              <img className="all-screen" src={gallery5}/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="all-screen">
              <img className="all-screen" src={gallery6}/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="all-screen">
              <img className="all-screen" src={gallery7}/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="all-screen">
              <img className="all-screen" src={gallery8}/>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
