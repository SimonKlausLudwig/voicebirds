import React, {FunctionComponent} from 'react';
import * as style from './style.module.scss';
import Button, {ButtonMode, ButtonSize} from "../button";


const CallToAction: FunctionComponent<{ title: string, description: string }> = ({title, description}) => {
  return (
    <div className={`${style.cta}`}>
      <img src={require('./bg.svg')}/>
      <div className={style.content}>
        <h1>{title}</h1>
        <p>{description}</p>
        <Button buttonMode={ButtonMode.OUTLINE} buttonSize={ButtonSize.BIG} onClick={() => {}}>Zum Konfigurator</Button>
      </div>
    </div>
  );
};

export default CallToAction;
