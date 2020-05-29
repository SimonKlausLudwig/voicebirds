import React, {useEffect} from 'react';
import Header from '../../components/header';
import logo from '../../assets/logo.svg';
import Illustration from "../../components/illustration";
import Layout from "../../components/layout";
import ContactBubble from "../../components/contactbubble";
import * as style from './style.module.scss';
// @ts-ignore
import HubspotForm from 'react-hubspot-form'
import BlockTitle from "../../components/title";

const ContactPage: React.FC = () => {

  useEffect(() => {
    window.jQuery = window.jQuery || function (nodeOrSelector) {
      if (typeof (nodeOrSelector) == 'string') {
        // eslint-disable-next-line no-undef
        return document.querySelector(s);
      }
      return nodeOrSelector;
    };
  });

  return (
    <Layout>
      <Illustration/>
      <BlockTitle title={"Dein Sprecher finden"} description={"Mit Voicebirds findest du innerhalb von nur 1 Minute den richtigen Sprecher. Ob für einen Film, eine Bandansage oder für einen Trailer, alles kein Problem  mit Voicebirds!"}/>
      <div className={style.contactRow}>
        <ContactBubble/>
        <div className={style.contactForm}>
          <h2>Kontaktformular</h2>
          <p>Du hast Fragen, benötigst Hilfe oder möchtest uns mit deinem Feedback noch besser machen?</p>
          <HubspotForm
            portalId='7545058'
            formId='a9098ce4-e6f7-47fa-916c-3fb7fba8117d'
            onSubmit={() => console.log('Submit!')}
            onFormReady={(form:any) => {
              [...form.querySelectorAll("label")].forEach(e => e.style.display = 'none');
              [...form.querySelectorAll(".sproket")].forEach(e => e.style.display = 'none');
              [...form.querySelectorAll("input[type='submit']")].forEach(e => {
                e.style.background = '#fb5895';
                e.style['border-radius'] = "24px";
              });
              [...form.querySelectorAll("input:not([type='submit'])")].concat([...form.querySelectorAll("textarea")])
                .forEach(e => {
                  e.style.background = 'white';
                  e.style.color = '#333333';
                });
            }}
            loading={<div>Loading...</div>}
          />
        </div>
      </div>
    </Layout>)
};

export default ContactPage;
