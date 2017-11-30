import React from 'react';

const ContactForm = () => {
  return <form name="awd-contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="awd-contact" />
      <div className="field">
        <label htmlFor="" className="label">
          Name
        </label>
        <div className="control">
          <input type="text" name="user-name" className="input" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="" className="label">
          Email
        </label>
        <div className="control">
          <input type="text" name="user-email" className="input" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="" className="label">
          Message
        </label>
        <div className="control">
          <textarea type="text" name="user-message" className="textarea" />
        </div>
      </div>
      <button className="button is-primary">Submit</button>
    </form>;
};

export default ContactForm;
