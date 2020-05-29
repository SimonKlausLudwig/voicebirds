import React, {FunctionComponent} from 'react';
import * as style from './style.module.scss';
import {Link} from "gatsby";

export interface FootMapItem {
  text: string,
  href: string
}

export interface FootMapList {
  name: string,
  items: FootMapItem[]
}

const FootMap: FunctionComponent<{ items?: FootMapList[] }> = ({items}) => {
  return (
    <div className={style.footMap}>
      {items?.map(item => {
        return <div key={item.name}>
          <b>{item.name}</b>
          <div className={style.footMapItems}>
            {item.items.map(link => {
              return <Link key={link.href} to={link.href}>{link.text}</Link>
            })}
          </div>
        </div>
      })}
    </div>
  );
};

export default FootMap;
