import React, { lazy } from 'react';
const Header = lazy(() => import('../components/Header'));
const Footer = lazy(() => import('../components/Footer'));
const SEO = lazy(() => import('../components/SEO'));

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