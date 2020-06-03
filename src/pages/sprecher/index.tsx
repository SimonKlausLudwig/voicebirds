import React from 'react';
import Illustration from "../../../test_project/src/illustration";
import Layout from "../../../test_project/src/layout";
import Speaker, {SpeakerArea} from "../../../test_project/src/speaker";
import FilterGrid from "../../../test_project/src/filtergrid";
import BlockTitle from "../../../test_project/src/title";
import Container from "../../../test_project/src/container";
import {getSpeakerList} from "../index";

const SpeakerPage: React.FC = () => {
  return (
    <Layout>
      <Illustration/>


      <Container>
        <BlockTitle title={"Unsere Sprecher im Überblick"}
                    description={"Du kannst unsere Sprecher in den drei Kategorien Budget, Premium und Enterprise buchen."}/>

        <FilterGrid items={(filter: any) => getSpeakerList(filter)}/>
      </Container>


    </Layout>)
};

export default SpeakerPage;
