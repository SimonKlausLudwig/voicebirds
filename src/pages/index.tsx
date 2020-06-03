import React from 'react';
import Illustration from "../../test_project/src/illustration";
import BlockTitle from "../../test_project/src/title";
import Speaker, {SpeakerArea} from "../../test_project/src/speaker";
import * as style from './style.module.scss';
import CallToAction from "../../test_project/src/cta";
import FilterGrid, {PriceModes} from "../../test_project/src/filtergrid";
import Layout from "../../test_project/src/layout";
import Button, {ButtonSize} from "../../test_project/src/button";
import QuickLink from "../../test_project/src/quicklink";
import {PAGE_PATHS} from "../i18n/pages";
import Container, {Mode} from "../../test_project/src/container";
import Space from "../../test_project/src/space";
import {Testimonials} from "../../test_project/src/testimonials";
import Form from "../../test_project/src/form";
import Video from "../../test_project/src/video/video";
import {i18n_speakers} from "../i18n/language_speakers";
import IllustrationAlt from "../../test_project/src/illustration_alt";
import SEO from "../../test_project/src/seo/seo";

const IndexPage: React.FC = (props) => {
  return (
    <Layout>

      <SEO siteProps={props} title={"Hallo Andre"}/>

      <IllustrationAlt/>

      <Container>
        <div className={style.teaser}>
          <img src={require('./person.svg')}/>
          <div>
            <h1>Dein Sprecher finden</h1>
            <p>Mit Voicebirds findest du innerhalb von nur 1 Minute den richtigen Sprecher. Ob für einen Film, eine
              Bandansage oder für einen Trailer, alles kein Problem mit Voicebirds!</p>
            <div className={style.buttonBar}>
              <Button className={style.teaserButton} buttonSize={ButtonSize.BIG} onClick={() => {
              }}>Zum Konfigurator</Button>
              <Button buttonSize={ButtonSize.BIG} secondary={true} onClick={() => {
              }}>Beispiele</Button>
            </div>
          </div>
        </div>
      </Container>

      <QuickLink className={style.quickLink}/>

      <Space/>


      <Container>
        <CallToAction title={"Unser neuer Konfigurator!"}
                      button={{
                        text: "Zum Konfigurator",
                        link: PAGE_PATHS.KONFIGURATOR.path
                      }}
                      description={"Mit unserem Konfigurator kannst du innerhalb von nur 1 Minute den richtigen Sprecher für dein Unterfangen finden."}/>
      </Container>


      <Space/>

      <Container mode={Mode.FULL}>
        <BlockTitle title={"Unsere Sprecher im Überblick"}
                    description={"Du kannst unsere Sprecher in den drei Kategorien Budget, Premium und Enterprise buchen."}/>
        <FilterGrid items={(filter: PriceModes) => getSpeakerList(filter)}/>
      </Container>

      <Space/>

      <Container>

        <BlockTitle title={"Unsere Sprecher im Überblick"}
                    description={"Du kannst unsere Sprecher in den drei Kategorien Budget, Premium und Enterprise buchen."}/>

        <Testimonials/>

      </Container>

      <Space/>

      <Container mode={Mode.PART}>

        <BlockTitle title={"Unsere Sprecher im Überblick"}
                    description={"Du kannst unsere Sprecher in den drei Kategorien Budget, Premium und Enterprise buchen."}/>

        <Form portalID={"7545058"} formId={"d4774b6d-df85-4b0c-ad12-63c5454e30a5"}/>



      </Container>

    </Layout>)
};

export default IndexPage;

export const getSpeakerList = (filter: PriceModes) => {
  return i18n_speakers
    .map(speaker => <Speaker name={speaker.name}
                             image={"https://videobakers.de/static/anna-92264f4ac7832f3fee808ba923cadc05.jpg"}
                             mp3={require(`./../assets/speakers/${speaker.name.toLowerCase()}.mp3`)}
                             areas={[SpeakerArea.PHONE, SpeakerArea.RADIO]}/>)
}
