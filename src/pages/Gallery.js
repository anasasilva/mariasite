import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from '../components/Navbar';

import tedx10 from '../assets/tedx10.jpeg';
import videoclip1 from '../assets/videoclip1.png';
import videoclip2 from '../assets/videoclip2.jpg';
import harp from '../assets/harp.jpeg';
import play from '../assets/play.jpeg';
import jovensmusicos from '../assets/jovensmusicos.jpg';
import branco from '../assets/branco.jpg';
import bw from '../assets/bw.jpg';


function Gallery() {


  return (
    <div >
      <Navbar gallery={true} />
      <div className="mt">
        <div className="row w-100 d-md-flex d-none">
          <div className="col-4 pr-3 pl-3">
            <img className="img-gallery" src={bw}/>
            <img className="img-gallery" src={harp}/>
          </div>
          <div className="col pr-3 pl-0">
            <img className="img-gallery" src={tedx10}/>
            <img className="img-gallery" src={videoclip1}/>
            <img className="img-gallery" src={branco}/>
          </div>
          <div className="col-3 pl-0">
            <img className="img-gallery" src={jovensmusicos}/>
            <img className="img-gallery" src={play}/>
            <img className="img-gallery" src={videoclip2}/>
          </div>
        </div>
        <div className="d-md-none">
        <Carousel fade controls={false} indicators={false} interval={2500}>
      <Carousel.Item>
        <div className="all-screen">
          <img className="all-screen" src={bw}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="all-screen">
        <img className="all-screen" src={harp}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="all-screen">
        <img className="all-screen" src={tedx10}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="all-screen">
        <img className="all-screen" src={videoclip1}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="all-screen">
        <img className="all-screen" src={branco}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="all-screen">
        <img className="all-screen" src={jovensmusicos}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="all-screen">
        <img className="all-screen" src={play}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="all-screen">
        <img className="all-screen" src={videoclip2}/>
        </div>
      </Carousel.Item>
    </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
