import React from 'react';
import ReactPlayer from 'react-player/youtube';
import Navbar from '../components/Navbar';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';


const firebase = require("firebase/app");

function HomePage() {

  return (
    <div className="homepage">
      <Navbar />
      <div className="mt">
        <div className="pt-3">
          <div className="d-flex">
            {/* <img className="img-size" src={homeImg}/> */}
            <ReactPlayer className="mx-auto mt-5" playing url='https://www.youtube.com/watch?v=LseIXZgCLvo&t=30s'/>
          </div>
        </div>
        <div>
          <div className="text mb-3 bolder w-75 mx-auto text-justify text-sm-center mt-4 pt-2">
            <p>
              Maria Sá Silva started her studies with seven years old at Conservatório de Música do Porto. In 2019, finished her Bachelor studies at Civica Scuola de Música Claudio Abbado, studying with Irina Zingg, Mara Galassi and Luisa Prandina.
              Winning prizes in Portugal, Spain, France and México (Mexico International Harp Competition), she collaborated with orchestras in Portugal, London, Brasil and Italy, participating on the recording of the soundtrack of the film Agadah, that received a prize in the Venice festival.
              She also played solo in different concert halls such as Casa da Música, Pinacoteca di Brera (Milan), Auditorium Latuada (Milan), Guidhall School of Music (London), in Museo Teatrale La Scala (Milan), CCB (Lisbon) and solo with different orquestras (Orquestra do Norte, OCCO- Orquestra de Câmara de Cascais e Oeiras, Orquestra Câmara Portuguesa).
              In july 2021 received a prize in the Concurso de Interpretação do Estoril, and in august of the same year, she played solo with orquestra de Câmara Portuguesa at CCB. In november of 2021 she presented her first creative project at Casa da Música, that was selected for the final of the Prémio Novos Talentos Ageas, and presented in 2022 at Sala Suggia in Casa da Música.  In May she was a prize winner at DHF World Harp Competition, with her project Saudade, that included transcriptions of the famous gritar player Carlos Paredes for harp.
            </p>
          </div>
        </div>
        <div className="imgFooter pb-4">
          <a target="_blank" href="https://www.facebook.com/maria.sasilva.98" className="white"><FacebookIcon className="socialIcon"/></a>
          <a target="_blank" href="http://www.instagram.com/mariasasilva97" className="white"><InstagramIcon className="socialIcon"/></a>
          <a target="_blank" href="mailto:mariasasousa@hotmail.com" className="white"><EmailIcon className="noRightPadding socialIcon"/></a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
