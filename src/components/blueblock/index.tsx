import React, {FunctionComponent} from 'react';
import * as style from './style.module.scss';
import {Link} from "gatsby";


const BlueBlock: FunctionComponent<{ }> = (props) => {
  const {children} = props;
  return (
    <div className={style.blueBlock}>
      {children}
    </div>
  );
};

export default BlueBlock;
