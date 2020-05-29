import React from 'react';
import Header from '../../components/header';
import logo from '../../assets/logo.svg';
import Illustration from "../../components/illustration";
import BlockTitle from "../../components/title";
import Person from "../../components/person";
import CallToAction from "../../components/cta";
import Map from "../../components/map";
import Testimonial from "../../components/testimonials";
import * as style from './style.module.scss';
import Layout from "../../components/layout";
import BlueBlock from "../../components/blueblock";

const CookiesPage: React.FC = () => {
  return (
    <Layout>

      <Illustration/>

      <BlockTitle title={"Impressum"} description={"Unsere Internetseite verwendet Cookies. Cookies sind kleine Textdateien, die lokal von Ihrem Webbrowser auf Ihrem Computer gespeichert werden. Weitere Informationen zu unserer Verwendung von Cookies finden Sie hier. Sie können Ihre Cookie-Einstellungen jederzeit ändern."}/>



    </Layout>)
};

export default CookiesPage;
