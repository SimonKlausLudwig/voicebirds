import React, {FunctionComponent} from 'react';
import * as style from './style.module.scss';
import Badges from "../badges";
import FootMap from "./footmap";
import {i18n_footer} from "../../i18n/language_footer";
import {PAGE_PATHS} from "../../i18n/pages";

const Footer: FunctionComponent<{ logo?: string }> = ({logo = ""}) => {
  return (
    <div className={style.footer}>
      <FootMap items={
        [{
          name: i18n_footer.footMap.links, items: [
            {text: i18n_footer.footMapItems.about, href: PAGE_PATHS.UEBERUNS.path},
            {text: i18n_footer.footMapItems.speaker, href: PAGE_PATHS.SPRECHER.path}
          ]
        },
          {
            name: i18n_footer.footMap.others, items: [
              {text: i18n_footer.footMapItems.imprint, href: PAGE_PATHS.IMPRINT.path},
              {text: i18n_footer.footMapItems.dataprotection, href: PAGE_PATHS.DATENSCHUTZ.path},
              {text: i18n_footer.footMapItems.contact, href: PAGE_PATHS.KONTAKT.path},
            ]
          }]
      }/>
      <Badges/>
    </div>
  );
};

export default Footer;
