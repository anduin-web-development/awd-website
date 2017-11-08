import React from 'react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  return (
    <div>
      <PageHeader bgUrl="">Contact</PageHeader>
      <section className="section">
        <div className="container">
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
        </div>
      </section>
    </div>
  );
};

export default Contact;
