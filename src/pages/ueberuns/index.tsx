import React from 'react';
import Illustration from "../../../test_project/src/illustration";
import BlockTitle from "../../../test_project/src/title";
import Person from "../../../test_project/src/person";
import Map from "../../../test_project/src/map";
import {Testimonials} from "../../../test_project/src/testimonials";
import * as style from './style.module.scss';
import Layout from "../../../test_project/src/layout";
import Container, {Mode} from "../../../test_project/src/container";
import Space from "../../../test_project/src/space";
import Form from "../../../test_project/src/form";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Illustration/>

      <Container mode={Mode.PART}>
        <BlockTitle title={"Wir auf einen Blick"}
                    description={"Mit Voicebirds findest du innerhalb von nur 1 Minute den richtigen Sprecher. Ob für einen Film, eine Bandansage oder für einen Trailer, alles kein Problem  mit Voicebirds!"}/>

        <div className={style.team}>
          <Person image={require('./andre.png')} name={"André Borges"}
                  description={"Simon sitzt aufm Baum und programmiert was das Zeug hält. Er ist nicht so doof wie es scheint."}
                  mail={"andre.borges@voicebirds.de"}/>
          <Person image={require('./simon.png')} name={"Simon Ludwig"}
                  description={"Simon sitzt aufm Baum und programmiert was das Zeug hält. Er ist nicht so doof wie es scheint."}
                  mail={"andre.borges@voicebirds.de"}/>
        </div>
      </Container>

      <Space/>

      <Container>
        <BlockTitle title={"Unser Office"}
                    description={"Voicebirds arbeitet aus dem Herzens von Bad Homburg und Weilburg. An jedem unserer Locations versuchen wir das beste Ergebnis für unsere Kunden zu erreichen."}/>
        <Map/>
      </Container>


      <Space/>

      <Container>
        <BlockTitle title={"Das sagen unsere Kunden..."}
                    description={"Corporate social responsibility policymaker inclusion, resist compassion mass incarceration correlation white paper."}/>

        <Testimonials/>
      </Container>

      <Space/>

      <Container mode={Mode.PART}>
        <BlockTitle title={"Das sagen unsere Kunden..."}
                    description={"Corporate social responsibility policymaker inclusion, resist compassion mass incarceration correlation white paper."}/>

        <Form portalID={"7545058"} formId={"d4774b6d-df85-4b0c-ad12-63c5454e30a5"}/>
      </Container>

    </Layout>)
};

export default AboutPage;
