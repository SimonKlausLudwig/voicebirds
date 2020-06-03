import React from 'react';
import Illustration from "../../../test_project/src/illustration";
import BlockTitle from "../../../test_project/src/title";
import Layout from "../../../test_project/src/layout";
import CookieSettings from "../../../test_project/src/cookies";
import Form from "../../../test_project/src/form";
import Container, {Mode} from "../../../test_project/src/container";
import Space from "../../../test_project/src/space";
import Button, {ButtonSize} from "../../../test_project/src/button";
import * as style from './style.module.scss';

const CookiesPage: React.FC = () => {
  return (
    <Layout>

      <Illustration/>


      <Container>
        <BlockTitle title={"Cookie Einstellungen"}
                    description={"Unsere Internetseite verwendet Cookies. Cookies sind kleine Textdateien, die lokal von Ihrem Webbrowser auf Ihrem Computer gespeichert werden. Weitere Informationen zu unserer Verwendung von Cookies finden Sie hier. Sie können Ihre Cookie-Einstellungen jederzeit ändern."}/>

        <CookieSettings cookies={[
          {
            cookieName: 'required',
            title: 'Notwendige Sitzungs-Cookies',
            description: 'Um ein funktionierendes Browsing-Erlebnis zu gewährleisten, verwenden wir Cookies, die unbedingt erforderlich sind. Da es sich um Sitzungs-Cookies handelt, werden diese automatisch und unmittelbar nach dem Schließen Ihres Web-Browsers gelöscht. Darüber hinaus werden sie ausschließlich von uns verwendet und sind daher sogenannte First-Party-Cookies. Ihre Zustimmung ist für die Verwendung dieser Cookies nicht erforderlich. Aus diesem Grund können unbedingt notwendige Cookies nicht einzeln aktiviert oder deaktiviert werden.'
          },
          {
            cookieName: 'functional',
            title: 'Funktionale Cookies',
            description: 'Funktionale Cookies speichern die Auswahlen, die Sie beim Besuch dieser Internetseite treffen, um Ihnen eine verbesserte Funktionalität und persönliche Funktionen zu bieten. Sie aktivieren diese Cookies über eine explizite Aktion, z.B. wenn Sie der Verwendung von Cookies auf unserer Website zustimmen. Aus diesem Grund können funktionale Cookies auf dieser Einstellungsseite nur deaktiviert, aber nicht aktiviert werden.'
          },
          {
            cookieName: 'analytic',
            title: 'Analytische Cookies',
            description: 'Analytische Cookies erlauben uns zu analysieren, wie diese Website verwendet wird. Dies ermöglicht uns, deren Leistung zu optimieren und die Benutzerfreundlichkeit zu erhöhen.'
          },
          {
            cookieName: 'social',
            title: 'Social-Media-Cookie',
            description: 'Durch unseren Social-Media-Cookie können Sie die Aktivitätsströme unserer Social-Media-Kanäle sehen, die auf unserer Website eingebettet sind.'
          },
        ]}/>

        <div className={style.buttonBar}>
          <Button buttonSize={ButtonSize.BIG} onClick={() => {
          }}>Alle akzeptieren</Button>
        </div>


      </Container>

      <Space/>

      <Container mode={Mode.PART}>
        <BlockTitle title={"So erreichst du uns..."}
                    description={"Du hast Fragen, benötigst Hilfe oder möchtest uns mit deinem Feedback noch besser machen?"}/>

        <Form portalID={"7545058"} formId={"a9098ce4-e6f7-47fa-916c-3fb7fba8117d"}/>
      </Container>

    </Layout>)
};

export default CookiesPage;
