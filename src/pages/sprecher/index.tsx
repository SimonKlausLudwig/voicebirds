import React from 'react';
import Illustration from "../../components/illustration";
import Layout from "../../components/layout";
import Speaker, {SpeakerArea} from "../../components/speaker";
import FilterGrid from "../../components/filtergrid";
import BlockTitle from "../../components/title";

const SpeakerPage: React.FC = () => {
  return (
    <Layout>
      <Illustration/>


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

export default SpeakerPage;
