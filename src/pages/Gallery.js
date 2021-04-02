import React from 'react';

import tedx9 from '../assets/tedx9.png';
import tedx10 from '../assets/tedx10.jpeg';
import videoclip1 from '../assets/videoclip1.png';
import videoclip2 from '../assets/videoclip2.jpg';
import harp from '../assets/harp.jpeg';
import play from '../assets/play.jpeg';
import jovensmusicos from '../assets/jovensmusicos.jpg';
import ojmaria from '../assets/oj maria.png';
import cmp from '../assets/cmp.jpg';
import branco from '../assets/branco.jpg';
import bw from '../assets/bw.jpg';

import Navbar from '../components/Navbar';


function Gallery() {
  // const [showMenu, setShowMenu] = React.useState(false);
  // const onClick = () => setShowMenu(true)

  const [language, setLanguage] = React.useState(false);
  const portuguese = () => setLanguage(false);
  const english = () => setLanguage(true);


  return (
    <div >
      <Navbar gallery={true} />
      <div className="gallery-page">
        <div className="row w-100">
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
      </div>
    </div>
  );
}

export default Gallery;
