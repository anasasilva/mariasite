import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import {withTranslation, useTranslation} from "react-i18next";
import db  from "../firebase-config";

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
      <div className="mt">
      <div className="pt-3">
        <div className="w-100 mx-auto mt-5">
          <ReactPlayer className="d-none d-md-block w-50 mx-auto mt-5" playing loop url='https://www.youtube.com/watch?v=LjaIy1QW9r0'/>
        </div>
        <div className="imgFooter py-4">
          <a target="_blank" href="https://www.facebook.com/maria.sasilva.98" className="white"><FacebookIcon className="socialIcon"/></a>
          <a target="_blank" href="http://www.instagram.com/mariasasilva97" className="white"><InstagramIcon className="socialIcon"/></a>
          <a target="_blank" href="mailto:mariasasousa@hotmail.com" className="white"><EmailIcon className="noRightPadding socialIcon"/></a>
        </div>
      </div>
      <div>
        <div className="text mb-5 bolder w-75 mx-auto text-justify text-sm-center mt-4 pt-2">
          { i18n.language == "en" ? 
          <p>{engBiography}</p>
          :
          <p>{ptBiography}</p>
          }
        </div>
      </div>
      </div>
    </div>
  );
}

export default HomePage;
