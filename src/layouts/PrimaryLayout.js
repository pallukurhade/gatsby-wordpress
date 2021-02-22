import React from 'react';
import loadable from '@loadable/component';
const Header = loadable(() => import('../components/Header'));
const Footer = loadable(() => import('../components/Footer'));
const SEO = loadable(() => import('../components/SEO'));

const PrimaryLayout = (props) => (
    <div>
    <SEO/>
    <Header/>
    <main>
     <div className="container">
       <div className="row justify-content-md-center">
          <div className={props.column}>
             {props.children}
          </div>
       </div>
      </div>
      </main>
     <Footer/>
     </div>
);

export default PrimaryLayout;