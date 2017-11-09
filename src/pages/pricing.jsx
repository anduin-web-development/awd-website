import React from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';

const Pricing = () => {
  return (
    <div>
      <PageHeader bgUrl="">Pricing</PageHeader>
      <Section containerClass="content has-text-centered">
        <h2 className="title is-2">Short Rundown</h2>
        <p className="is-size-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          assumenda iusto provident suscipit odio fugit amet magnam eveniet
          repudiandae a molestias unde adipisci, accusantium cum ratione
          corrupti expedita modi voluptate.
        </p>
      </Section>
      <Section>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content content">
                <h3 className="title is-3">Bootstrap</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  deleniti quo necessitatibus obcaecati ratione pariatur nulla
                  veniam! Doloribus iure excepturi, nobis facilis nisi mollitia
                  maxime.
                </p>
                <ul>
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content content">
                <h3 className="title is-3">Basic</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  deleniti quo necessitatibus obcaecati ratione pariatur nulla
                  veniam! Doloribus iure excepturi, nobis facilis nisi mollitia
                  maxime.
                </p>
                <ul>
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content content">
                <h3 className="title is-3">Custom</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  deleniti quo necessitatibus obcaecati ratione pariatur nulla
                  veniam! Doloribus iure excepturi, nobis facilis nisi mollitia
                  maxime.
                </p>
                <ul>
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                  <li>Feature</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Pricing;
