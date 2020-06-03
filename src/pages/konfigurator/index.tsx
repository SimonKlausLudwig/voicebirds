import React from 'react';
import Illustration from "../../../test_project/src/illustration";
import BlockTitle from "../../../test_project/src/title";
import Layout from "../../../test_project/src/layout";
import * as style from './style.module.scss';
import WizardComponent from "../../../test_project/src/wizard/component";
import WizardStep from "../../../test_project/src/wizard";
import WizardBody from "../../../test_project/src/wizard/body";
import TextBox from "../../../test_project/src/wizard/checkbox/checkbox/textbox";
import WizardFinishStep from "../../../test_project/src/wizard/finish";
import RichtTextWizardStep from "../../../test_project/src/wizard/richtext";
import Container, {Mode} from "../../../test_project/src/container";
import Form from "../../../test_project/src/form";
import Space from "../../../test_project/src/space";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Illustration/>

      <Container>

        <BlockTitle title={"Wofür brauchst du einen  Sprecher ?"}
                    description={"Du hast Fragen, benötigst Hilfe oder möchtest uns mit deinem Feedback noch besser machen ?"}/>


        <div className={style.wizard}>
          <WizardComponent hidePrice={false} historyEnabled={true} step={{
            id: 'asdasd',
            children: (options: any) => <WizardStep header={"Hallo"} description={"Hallo"} {...options}>
              <WizardBody className={style.options}>
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(i => {
                  return <TextBox id={`language_option`}
                                  title={"asd"}
                                  description={"Das Skript wird von einem Muttersprachlichen Sprecher aufgenommen."}
                                  type={"checkbox"}
                                  data-price={100}
                                  position={"123"} groupTitle={"asd"} name={"asdkkss"}/>;
                })}
              </WizardBody>
            </WizardStep>,
            next: () => ({
              id: 'jajsdsajd',
              children: (options: any) => <WizardStep header={"Hallo"} description={"Hallo"} {...options}>
                <WizardBody>
                  <WizardFinishStep/>
                </WizardBody>
              </WizardStep>,
              next: () => (
                {
                  id: 'jajsdsajd123',
                  children: (options: any) => <RichtTextWizardStep loadText={() => {
                  }} saveText={() => {
                  }} header={"Hallo"} description={"Hallo"} {...options}>
                    <WizardBody>
                      <WizardFinishStep/>
                    </WizardBody>
                  </RichtTextWizardStep>,
                }
              )
            })
          }}/>
        </div>
      </Container>

      <Space/>

      <Container mode={Mode.PART}>

        <BlockTitle title={"Unsere Sprecher im Überblick"}
                    description={"Du kannst unsere Sprecher in den drei Kategorien Budget, Premium und Enterprise buchen."}/>

        <Form portalID={"7545058"} formId={"d4774b6d-df85-4b0c-ad12-63c5454e30a5"}/>

      </Container>


    </Layout>)
};

export default AboutPage;
