import React, {FunctionComponent} from 'react';
import * as style from './style.module.scss';
import Button, {ButtonMode, ButtonSize} from "../button";


const Map: FunctionComponent<{ }> = ({}) => {
  return (
    <div className={`${style.map}`}>
      <img src={require('./bg.svg')}/>
      <img className={style.mapImage} src={'https://cdn.zeplin.io/5b0dc96bbbadc157a4fa26ed/assets/E1F855E7-8D0E-4A62-98CD-DA162DF4B601.svg'}/>
    </div>
  );
};

export default Map;
