import React from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import Navbar from '../components/Navbar/Navbar';
import action from '../assets/action__sm-conference.jpg';
import Footer from '../components/Footer/Footer';
import Heel from '../components/Footer/Heel';

const TermsAndPrivacy = () => {
  return (
    <div>
      <Navbar />
      <PageHeader bgUrl={action}>Terms & Privacy</PageHeader>
      <Section>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h2 className="title is-2">Terms & Conditions</h2>
            <div className="content">
              <h3 className="title is-3">1. Terms</h3>
              <p>
                By accessing the website at&nbsp; http://anduin.io, you are
                agreeing to be bound by these terms of service, all applicable
                laws and regulations, and agree that you are responsible for
                compliance with any applicable local laws. If you do not agree
                with any of these terms, you are prohibited from using or
                accessing this site. The materials contained in this website are
                protected by applicable copyright and trademark law.
              </p>
              <h3 className="title is-3">2. Use License</h3>
              <ol type="a">
                <li>
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on Anduin Web
                  Development's website for personal, non-commercial transitory
                  viewing only. This is the grant of a license, not a transfer
                  of title, and under this license you may not:
                  <ol type="i">
                    <li>modify or copy the materials;</li>
                    <li>
                      use the materials for any commercial purpose, or for any
                      public display (commercial or non-commercial);
                    </li>
                    <li>
                      attempt to decompile or reverse engineer any software
                      contained on Anduin Web Development's website;
                    </li>
                    <li>
                      remove any copyright or other proprietary notations from
                      the materials; or
                    </li>
                    <li>
                      transfer the materials to another person or "mirror" the
                      materials on any other server.
                    </li>
                  </ol>
                </li>
                <br />
                <li>
                  This license shall automatically terminate if you violate any
                  of these restrictions and may be terminated by Anduin Web
                  Development at any time. Upon terminating your viewing of
                  these materials or upon the termination of this license, you
                  must destroy any downloaded materials in your possession
                  whether in electronic or printed format.
                </li>
              </ol>
              <h3 className="title is-3">3. Disclaimer</h3>
              <ol type="a">
                <li>
                  The materials on Anduin Web Development's website are provided
                  on an 'as is' basis. Anduin Web Development makes no
                  warranties, expressed or implied, and hereby disclaims and
                  negates all other warranties including, without limitation,
                  implied warranties or conditions of merchantability, fitness
                  for a particular purpose, or non-infringement of intellectual
                  property or other violation of rights.
                </li>
                <li>
                  Further, Anduin Web Development does not warrant or make any
                  representations concerning the accuracy, likely results, or
                  reliability of the use of the materials on its website or
                  otherwise relating to such materials or on any sites linked to
                  this site.
                </li>
              </ol>
              <h3 className="title is-3">4. Limitations</h3>
              <p>
                In no event shall Anduin Web Development or its suppliers be
                liable for any damages (including, without limitation, damages
                for loss of data or profit, or due to business interruption)
                arising out of the use or inability to use the materials on
                Anduin Web Development's website, even if Anduin Web Development
                or a Anduin Web Development authorized representative has been
                notified orally or in writing of the possibility of such damage.
                Because some jurisdictions do not allow limitations on implied
                warranties, or limitations of liability for consequential or
                incidental damages, these limitations may not apply to you.
              </p>
              <h3 className="title is-3">5. Accuracy of Materials</h3>
              <p>
                The materials appearing on Anduin Web Development website could
                include technical, typographical, or photographic errors. Anduin
                Web Development does not warrant that any of the materials on
                its website are accurate, complete or current. Anduin Web
                Development may make changes to the materials contained on its
                website at any time without notice. However Anduin Web
                Development does not make any commitment to update the
                materials.
              </p>
              <h3 className="title is-3">6. Links</h3>
              <p>
                Anduin Web Development has not reviewed all of the sites linked
                to its website and is not responsible for the contents of any
                such linked site. The inclusion of any link does not imply
                endorsement by Anduin Web Development of the site. Use of any
                such linked website is at the user's own risk.
              </p>
              <h3 className="title is-3">7. Modifications</h3>
              <p>
                Anduin Web Development may revise these terms of service for its
                website at any time without notice. By using this website you
                are agreeing to be bound by the then current version of these
                terms of service.
              </p>
              <h3 className="title is-3">8. Governing Law</h3>
              <p>
                These terms and conditions are governed by and construed in
                accordance with the laws of California and you irrevocably
                submit to the exclusive jurisdiction of the courts in that State
                or location.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h2 className="title is-2">Privacy Policy</h2>
            <div className="content">
              <p>
                Your privacy is important to us. It is Anduin Web Development's
                policy to respect your privacy regarding any information we may
                collect from you across our website, .
              </p>
              <p>
                We do not request your personal information except where
                necessary. When we do collect personal information, we do so by
                fair and lawful means with your knowledge or consent, and
                collect no more than what is necessary in the fulfillment of a
                service. We will inform you of the reason for collection, and
                how your information will be used.
              </p>
              <p>
                We do not share your personal information with third-parties,
                except where required by law. We will only retain personal
                information for as long as is necessary in the provision of a
                service.
              </p>
              <p>
                We do not store your personal information on our servers unless
                it is requisite to the provision of a service. What we store, we
                will protect, within commercially acceptable means, from loss or
                theft, unauthorized access, disclosure, copying, use or
                modification.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
      <Heel />
    </div>
  );
};

export default TermsAndPrivacy;
