import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';
import contactsImg from '../assets/contacts.png';

function Contacts() {

  const [message, setMessage] = useState(" ");
  const [mailInfo, setMailInfo] = useState("");

  const sendEmail = (e) => {
    setMailInfo("sending");
    e.preventDefault();

    emailjs.sendForm('service_8cyp68p', 'template_oyxr94t', e.target, 'user_gdiSd8KXCJCJcxCOIzBgx')
      .then((result) => {
          setMessage("Mensage sent successfully!");
          setMailInfo("done");
      }, (error) => {
          setMailInfo("error");
          setMessage("An error occurred when sending the message");
      });
  }

  return (
    <div className="homepage">
      <Navbar />
      <div className="gallery-page content-div row mt-contacts">
        <div className="text-div w-100 col">
          <div className="row w-100">
            <form className="col-10 col-md-8 col-lg-10 col-xl-6" onSubmit={sendEmail}>
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
                <label className="text-form" htmlFor="InputName">Subject</label>
                <input
                  type="text"
                  className="form-control input-border"
                  name="subject"
                  required
                />
              </div>
              <div className="form-group my-4 w-100">
                <label className="text-form" htmlFor="InputName">Reason</label>
                <div>
                <select className="p-2 w-100" name="reason">
                  <option name="reason" value="Collaborations">Collaborations</option>
                  <option name="reason" value="Solos">Solos</option>
                  <option name="reason" value="Other">Other</option>
                </select>
                </div>
              </div>
              <div className="form-group my-4">
                <label className="text-form" htmlFor="InputName">
                  Message
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
                  ) : (<>
                    Send
                    </>)
                  }
              
              </button>
              <h5 className="text-center mt-3">{message}</h5>
            </form>
          </div>
        </div>
        <div className="d-none d-lg-block col mx-auto my-auto">
          <div className="d-flex justify-content-center">
            <img className="img-contact" src={contactsImg}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
