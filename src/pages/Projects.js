import React from 'react';
import ReactPlayer from 'react-player/youtube';
import Navbar from '../components/Navbar';


function Projects() {

  return (
    <div className="homepage">
      <Navbar />
      <div>
        <div className="row mt-5 justify-content-center">
          <div className="col-md-5 col-12">
            <ReactPlayer className="w-100 mx-auto mt-5" loop url='https://www.youtube.com/watch?v=6IfiDbX5cC4'/>
          </div>
          <div className="col-md-5 col-12">
            <ReactPlayer className="w-100 mx-auto mt-5" loop url='https://www.youtube.com/watch?v=6IfiDbX5cC4'/>
          </div>
          <div className="col-md-5 col-12">
            <ReactPlayer className="w-100 mx-auto mt-5" loop url='https://www.youtube.com/watch?v=LjaIy1QW9r0'/>
          </div>
          <div className="col-md-5 col-12">
            <ReactPlayer className="w-100 mx-auto mt-5" loop url='https://www.youtube.com/watch?v=RRnCJiyzv-s'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
