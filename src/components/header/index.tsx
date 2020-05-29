import React, {FunctionComponent} from 'react';
import * as style from './style.module.scss';
import {i18n_pages} from "../../i18n/language_pages";
import {Link} from "gatsby";
import {PAGE_PATHS} from "../../i18n/pages";
import Button, {ButtonSize} from "../button";
import { navigate } from "gatsby"

const Header:FunctionComponent<{ logo?: string }> = ({ logo = "" }) => {
  console.log(style);
  return (
    <div className={style.navigation}>
      <img onClick={() => navigate("/")} className={style.logo} src={logo} />
      <div className={style.navItems}>
        <Link activeClassName={style.activeItem} to={"/"}>{i18n_pages.homepage}</Link>
        <Link activeClassName={style.activeItem} to={PAGE_PATHS.SPRECHER.path}>{i18n_pages.speaker}</Link>
        <Link activeClassName={style.activeItem} to={PAGE_PATHS.UEBERUNS.path}>{i18n_pages.about}</Link>
        <Button buttonSize={ButtonSize.BIG} onClick={() => navigate(PAGE_PATHS.KONTAKT.path)}>{i18n_pages.contact}</Button>
      </div>
    </div>
  );
};

export default Header;
