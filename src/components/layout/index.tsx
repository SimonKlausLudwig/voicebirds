import React, {FunctionComponent} from 'react';
import * as style from './style.module.scss';
import FootMap from "../footer/footmap";
import Footer from "../footer";
import Header from "../header";
import logo from '../../assets/logo.svg';

const Layout: FunctionComponent<{}> = ({children}) => {
  return (
    <div className={`${style.layout}`}>
      <Header logo={logo}/>
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
