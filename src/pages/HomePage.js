import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import {withTranslation, useTranslation} from "react-i18next";
import db  from "../firebase-config";

import video1 from '../assets/hindemith.mp4';
import Navbar from '../components/Navbar';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';


const firebase = require("firebase/app");

function HomePage() {

  const {t, i18n} = useTranslation('all');
  const [ptBiography, setPTBiography] = useState("");
  const [engBiography, setENGBiography] = useState("");

  useEffect(() => {
    var docRef = db.collection("infos").doc("biography");

    docRef.get().then((doc) => {
        if (doc.exists) {
          setENGBiography(doc.data()["english"]);
          setPTBiography(doc.data()["portuguese"]);
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  });

  return (
    <div className="homepage">
      <Navbar home={true} />
      <div className="gallery-page">
      <div>
        <div className="w-100 mx-auto">
          <ReactPlayer className="w-50 mx-auto" playing url='https://www.youtube.com/watch?v=uaaQOpPO3pY' controls={false}/>
        </div>
        <div className="imgFooter">
          <a href="mailto:mariasasousa@hotmail.com" className="white"><EmailIcon className="noRightPadding socialIcon"/></a>
          <a href="http://www.instagram.com/mariasasilva97" className="white"><InstagramIcon className="socialIcon"/></a>
          <a href="https://www.facebook.com/maria.sasilva.98" className="white"><FacebookIcon className="socialIcon"/></a>
        </div>
      </div>
      <div>
        <div className="text text-font w-75 mx-auto text-center mt-4 pt-2">
          { i18n.language == "en" ? 
          <p>{ptBiography}</p>
          :
          <p>{engBiography}</p>
          }
        </div>
      </div>
      </div>
    </div>
  );
}

export default HomePage;
