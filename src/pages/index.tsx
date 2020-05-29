import React from 'react';
import Illustration from "../components/illustration";
import BlockTitle from "../components/title";
import Speaker, {SpeakerArea} from "../components/speaker";
import * as style from './style.module.scss';
import CallToAction from "../components/cta";
import FilterGrid from "../components/filtergrid";
import Layout from "../components/layout";
import Button, {ButtonSize} from "../components/button";
import QuickLink from "../components/quicklink";

const IndexPage: React.FC = () => {
  return (
    <Layout>

      <Illustration
        src={"https://cdn.zeplin.io/5b0dc96bbbadc157a4fa26ed/assets/70C90A39-5ADB-4A42-9629-4C9671A06C93.svg"}/>

      <div className={style.teaser}>
        <h1>Dein Sprecher finden</h1>
        <p>Mit Voicebirds findest du innerhalb von nur 1 Minute den richtigen Sprecher. Ob für einen Film, eine
          Bandansage oder für einen Trailer, alles kein Problem mit Voicebirds!</p>
        <Button className={style.teaserButton} buttonSize={ButtonSize.BIG} onClick={() => {
        }}>Zum Konfigurator</Button>
        <Button buttonSize={ButtonSize.BIG} secondary={true} onClick={() => {
        }}>Beispiele</Button>
      </div>

      <QuickLink/>


      <CallToAction title={"Unser neuer Konfigurator!"}
                    description={"Mit unserem Konfigurator kannst du innerhalb von nur 1 Minute den richtigen Sprecher für dein Unterfangen finden."}/>


      <BlockTitle title={"Unsere Sprecher im Überblick"}
                  description={"Du kannst unsere Sprecher in den drei Kategorien Budget, Premium und Enterprise buchen."}/>

      <FilterGrid items={(filter: any) =>
        [<Speaker name={"Simon Ludwig"}
                  image={"https://videobakers.de/static/anna-92264f4ac7832f3fee808ba923cadc05.jpg"} mp3={""}
                  areas={[SpeakerArea.PHONE, SpeakerArea.RADIO]}/>,
          <Speaker name={"Simon Ludwig"}
                   image={"https://videobakers.de/static/anna-92264f4ac7832f3fee808ba923cadc05.jpg"} mp3={""}
                   areas={[SpeakerArea.PHONE, SpeakerArea.RADIO]}/>,
          <Speaker name={"Simon Ludwig"}
                   image={"https://videobakers.de/static/anna-92264f4ac7832f3fee808ba923cadc05.jpg"} mp3={""}
                   areas={[SpeakerArea.PHONE, SpeakerArea.RADIO]}/>,
          <Speaker name={"Simon Ludwig"}
                   image={"https://videobakers.de/static/anna-92264f4ac7832f3fee808ba923cadc05.jpg"} mp3={""}
                   areas={[SpeakerArea.PHONE, SpeakerArea.RADIO]}/>,
          <Speaker name={"Simon Ludwig"}
                   image={"https://videobakers.de/static/anna-92264f4ac7832f3fee808ba923cadc05.jpg"} mp3={""}
                   areas={[SpeakerArea.PHONE, SpeakerArea.RADIO]}/>,
          <Speaker name={"Simon Ludwig"}
                   image={"https://videobakers.de/static/anna-92264f4ac7832f3fee808ba923cadc05.jpg"} mp3={""}
                   areas={[SpeakerArea.PHONE, SpeakerArea.RADIO]}/>]
      }/>


    </Layout>)
};

export default IndexPage;
