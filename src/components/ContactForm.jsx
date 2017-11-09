import React from 'react';

const ContactForm = () => {
  return (
    <form action="">
      <div className="field">
        <label htmlFor="" className="label">
          Name
        </label>
        <div className="control">
          <input type="text" className="input" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="" className="label">
          Email
        </label>
        <div className="control">
          <input type="text" className="input" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="" className="label">
          Message
        </label>
        <div className="control">
          <textarea type="text" className="textarea" />
        </div>
      </div>
      <button className="button is-primary">Submit</button>
    </form>
  );
};

export default ContactForm;
