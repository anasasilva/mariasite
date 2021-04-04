import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { withTranslation, useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';


import Navbar from '../components/Navbar';

function Contacts() {

  const { t, i18n } = useTranslation('all');
  const [message, setMessage] = useState(" ");
  const [mailInfo, setMailInfo] = useState("");

  const sendEmail = (e) => {
    setMailInfo("sending");
    e.preventDefault();

    emailjs.sendForm('service_8cyp68p', 'template_oyxr94t', e.target, 'user_gdiSd8KXCJCJcxCOIzBgx')
      .then((result) => {
          if (i18n.language === "pt")
            setMessage("Mensagem enviada com sucesso!");
          else
            setMessage("Mensage sent successfully!");
          setMailInfo("done");
      }, (error) => {
          setMailInfo("error");
          if (i18n.language === "pt")
            setMessage("Houve um erro no envio da mensagem");
          else
            setMessage("An error occurred when sending the message");
      });
  }

  return (
    <div className="homepage">
      <Navbar contacts={true} />
      <div className="gallery-page content-div row">
        <div className="text-div w-100 col">
          <form className="w-50" onSubmit={sendEmail}>
            <div className="form-group mb-4">
              <label className="text-form" htmlFor="InputName">
                Email
                </label>
              <input
                type="email"
                className="form-control input-border"
                name="email"
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
                name="subject"
                required
              />
            </div>
            <div className="form-group my-4 w-100">
              <label className="text-form" htmlFor="InputName">
                {t('contacts.reason')}
                </label>
              <div>
              <select className="p-2 w-100" name="reason">
                <option name="reason" value="Colaboração">{t('contacts.collaborations')}</option>
                <option name="reason" value="Solo">{t('contacts.solos')}</option>
                <option name="reason" value="Outro">{t('contacts.other')}</option>
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
            <button className="w-100 p-2 my-2 submit-btn" type="submit" value="submit">
            {mailInfo === "sending" ? (
                  <span
                    className="spinner-border spinner-border-sm my-auto"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  t('contacts.send')
                )}
            
            </button>
            <h5 className="text-center mt-3">{message}</h5>
          </form>
        </div>
        <div className="d-none d-lg-block col mx-auto my-auto">
          <ReactPlayer playing url='https://www.youtube.com/watch?app=desktop&v=RRnCJiyzv-s' controls={false}/>
        </div>
      </div>
    </div>
  );
}

export default withTranslation("all")(Contacts);
