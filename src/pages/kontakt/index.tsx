import React from 'react';
import Illustration from "../../../test_project/src/illustration";
import Layout from "../../../test_project/src/layout";
import ContactBubble from "../../../test_project/src/contactbubble";
import * as style from './style.module.scss';
import BlockTitle from "../../../test_project/src/title";
import Form from "../../../test_project/src/form";
// @ts-ignore

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <Illustration/>
      <BlockTitle title={"Dein Sprecher finden"}
                  description={"Mit Voicebirds findest du innerhalb von nur 1 Minute den richtigen Sprecher. Ob für einen Film, eine Bandansage oder für einen Trailer, alles kein Problem  mit Voicebirds!"}/>
      <div className={style.contactRow}>
        <ContactBubble/>
        <div className={style.contactForm}>
          <h2>Kontaktformular</h2>
          <p>Du hast Fragen, benötigst Hilfe oder möchtest uns mit deinem Feedback noch besser machen?</p>
          <Form portalID={"7545058"} formId={"a9098ce4-e6f7-47fa-916c-3fb7fba8117d"}/>
        </div>
      </div>
    </Layout>)
};

export default ContactPage;
