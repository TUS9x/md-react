import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import React from 'react';

const Feedback = () => {
  const [ten, setTen] = useState('A');
  const [email, setEmail] = useState('chua');
  const [noidung, setND] = useState('ND');
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_5c7lytm', 'template_jps5vxx', form.current, '9pPp6KjfyiGLZIrQ-').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };
  return (
    <div className="row justify-content-center">
      <div className="content row">
        <div className="header col-10">
          <h3 className="title" style={{ textAlign: 'center' }}>
            FEEDBACK
          </h3>
        </div>
        <div className="body col-12">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              {' '}
              <label>Ten:</label> <br />{' '}
              <input type="text" name="user_name" className="form-control" onChange={(t) => setTen(t.target.value)} />{' '}
            </div>
            <div className="form-group">
              <label>Email:</label> <br />{' '}
              <input
                type="email"
                name="user_email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Noi dung:</label> <br />
              <textarea name="message" className="form-control" onChange={(nd) => setND(nd.target.value)} />
            </div>
            <input className="btn btn-outline-success" type="submit" value="Send" />
          </form>
        </div>
        <div className="footer"><br /></div>
      </div>
    </div>
  );
};

export default Feedback;
