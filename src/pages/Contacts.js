import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { withTranslation, useTranslation } from "react-i18next";


import tedxvid from '../assets/tedxvid.mp4';
import Navbar from '../components/Navbar';

function Contacts() {

  const { t, i18n } = useTranslation('all');

  return (
    <div className="homepage">
      <Navbar contacts={true} />
      <div className="content-div">
        <div className="row text-div">
          <form className="col-8">
            <div className="form-group mb-4">
              <label className="text-form" htmlFor="InputName">
                Email
                </label>
              <input
                type="text"
                className="form-control input-border"
                name="from_name"
                required
              />
            </div>
            <div className="form-group my-4">
              <label className="text-form" htmlFor="InputName">
                {t('contacts.subject')}
                </label>
              <input
                type="text"
                className="form-control input-border"
                name="from_name"
                required
              />
            </div>
            <div className="form-group my-4 w-100">
              <label className="text-form" htmlFor="InputName">
                {t('contacts.reason')}
                </label>
              <div>
              <select className="p-2 w-100">
                <option value="actual value 1">{t('contacts.collaborations')}</option>
                <option value="actual value 2">{t('contacts.solos')}</option>
              </select>
              </div>
            </div>
            <div className="form-group my-4">
              <label className="text-form" htmlFor="InputName">
                {t('contacts.message')}
                </label>
                <textarea
                  autoComplete="off"
                  type="text"
                  className="form-control input-border"
                  id="InputText"
                  name="message"
                  rows="4"
                  required
                />
            </div>
            <button className="w-100 p-2 my-2 submit-btn">
            {t('contacts.send')}
            </button>
          </form>
        </div>
        <div className="w-50 mx-auto my-auto">
          <ReactPlayer playing url='https://www.youtube.com/watch?v=WSPv78f6lKg' controls={false}/>
        </div>
      </div>
    </div>
  );
}

export default withTranslation("all")(Contacts);
