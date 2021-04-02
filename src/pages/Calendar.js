import React, { useState, useEffect } from 'react';
import { withTranslation, useTranslation } from "react-i18next";
import db  from "../firebase-config";


import ojmaria from '../assets/ojmaria.jpeg';

import Navbar from '../components/Navbar';


function Calendar() {

  const { t, i18n } = useTranslation('all');
  const [shows, setShows] = useState("");
  const [showsENG, setENGShows] = useState("");
  const [loading, setLoading] = useState(true)


  useEffect(() => {

    if (loading) {

      db.collection('espetaculos')
        .get()
        .then(querySnapshot => {
          const documents = querySnapshot.docs.map(doc => doc.data());
          setLoading(false);
          setShows(Object.values(documents));
        })

      db.collection('espetaculoseng')
        .get()
        .then(querySnapshot => {
          const documents = querySnapshot.docs.map(doc => doc.data());
          setLoading(false);
          setENGShows(Object.values(documents));
        })
    }
  }, [shows]);

  return (
    <div className="homepage">
      <Navbar calendar={true} darkNavBar={false} />
      <div className="content-div">
        <div className="text-div">
          <div>
            <h3 className="mb-4 pb-2">{t('schedule.nextshows')}</h3>
            {i18n.language === "pt" ? 
              Object.values(shows).map(value => <p>{value["data"]}, {value["nome"]}, {value["local"]}</p>)
            :
              Object.values(showsENG).map(value => <p>{value["data"]}, {value["nome"]}, {value["local"]}</p>)
            }
          </div>
        </div>
        <img src={ojmaria} className="image-div" alt="logo" />
      </div>
    </div>
  );
}

export default withTranslation("all")(Calendar);
