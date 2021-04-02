import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import all_en from "./translations/en.json";
import all_pt from "./translations/pt.json";

import 'bootstrap/dist/css/bootstrap.min.css';

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: localStorage.getItem('lang') || 'en',                              // language to use
  resources: {
      en: {
          all: all_en               // 'common' is our custom namespace
      },
      pt: {
          all: all_pt
      },
  },
});


ReactDOM.render(
  <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
    </React.StrictMode>,
  document.getElementById('root')
);