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

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Illustration/>
      <BlockTitle title={"Wir auf einen Blick"} description={"Mit Voicebirds findest du innerhalb von nur 1 Minute den richtigen Sprecher. Ob für einen Film, eine Bandansage oder für einen Trailer, alles kein Problem  mit Voicebirds!"}/>

      <div className={style.team}>
        <Person name={"André Borges"} description={"Simon sitzt aufm Baum und programmiert was das Zeug hält. Er ist nicht so doof wie es scheint."} mail={"andre.borges@voicebirds.de"}/>
        <Person name={"Simon Ludwig"} description={"Simon sitzt aufm Baum und programmiert was das Zeug hält. Er ist nicht so doof wie es scheint."} mail={"andre.borges@voicebirds.de"}/>
      </div>

      <BlockTitle title={"Unser Office"} description={"Voicebirds arbeitet aus dem Herzens von Bad Homburg und Weilburg. An jedem unserer Locations versuchen wir das beste Ergebnis für unsere Kunden zu erreichen."}/>

      <img src={"https://cdn.zeplin.io/5b0dc96bbbadc157a4fa26ed/assets/D553FE86-4F07-4165-AAF9-D68EE331B011.png"}/>

      <Map/>

      <BlockTitle title={"Das sagen unsere Kunden..."} description={"Corporate social responsibility policymaker inclusion, resist compassion mass incarceration correlation white paper."}/>

      <div className={style.testimonials}>
        <Testimonial quotes={true} name={"Simon"} company={""} description={""}/>
        <Testimonial quotes={false} name={"Simon"} company={""} description={""}/>
      </div>

    </Layout>)
};

export default AboutPage;
