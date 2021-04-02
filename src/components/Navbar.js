import React from 'react';
import {withTranslation, useTranslation} from "react-i18next";

function Navbar(props) {

  const {t, i18n} = useTranslation('all');
  let { darkNavBar } = props;

  if (darkNavBar === undefined)
    darkNavBar = true;


  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
    });
    localStorage.setItem('lang', event.target.value)
  };

  return (
      <div className={"header " + (darkNavBar ? "black-bg" : "")}>
        <h1 className="title">Maria Sá Silva</h1>
        <div className="d-flex my-auto">
          <a className={"mr-3 " + (darkNavBar ? " white" : " black")} href="/"><h5 className={"text-font " + (props.home ? "underline" : "") + (darkNavBar ? " white" : " black")}>{t('navbar.home')}</h5></a>
          <a className={"mr-3 " + (darkNavBar ? " white" : " black")} href="/gallery"><h5 className={"text-font " + (props.gallery ? "underline" : "") + (darkNavBar ? " white" : " black")}>{t('navbar.gallery')}</h5></a>
          <a className={"mr-3 " + (darkNavBar ? " white" : " black")} href="/calendar"><h5 className={"text-font " + (props.calendar ? "underline" : "") + (darkNavBar ? " white" : " black")}>{t('navbar.schedule')}</h5></a>
          <a className={"mr-3 " + (darkNavBar ? " white" : " black")} href="/contacts"><h5 className={"text-font " + (props.contacts ? "underline" : "") + (darkNavBar ? " white" : " black")}>{t('navbar.contacts')}</h5></a>
          <select className={"language-select " + (darkNavBar ? " white" : " black")} onChange={handleChange}>
            <option value="en" selected={i18n.language == "en"}>ENG</option>
            <option value="pt" selected={i18n.language == "pt"}>PT</option>
          </select>
        </div>
      </div>
  );
}

export default withTranslation('all')(Navbar);
