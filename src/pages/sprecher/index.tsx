import React, {useState} from 'react';
import Illustration from "../../../test_project/src/illustration";
import Layout from "../../../test_project/src/layout";
import FilterGrid, {PriceModes} from "../../../test_project/src/filtergrid";
import BlockTitle from "../../../test_project/src/title";
import Container from "../../../test_project/src/container";
import {getSpeakerList} from "../index";
import Select from "../../../test_project/src/select";
import * as style from "../beispiele/style.module.scss";

const SpeakerPage: React.FC = () => {

  const [selected, setSelect] = useState(PriceModes.ALL)

  return (
    <Layout>
      <Illustration/>


      <Container>
        <BlockTitle title={"Unsere Sprecher im Überblick"}
                    description={"Du kannst unsere Sprecher in den drei Kategorien Budget, Premium und Enterprise buchen."}/>

        <Select className={style.filterBar}
                options={[PriceModes.ALL,PriceModes.BUDGET, PriceModes.PREMIUM, PriceModes.ENTERPRISE]}
                value={selected}
                setValue={(e: any) => setSelect(e)}/>
        <FilterGrid items={(filter: any) => getSpeakerList(selected)}/>
      </Container>


    </Layout>)
};

export default SpeakerPage;
