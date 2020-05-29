import React, {FunctionComponent} from 'react';
import * as style from './style.module.scss';
import Button, {ButtonSize} from "../button";

const PlayButton: FunctionComponent<{}> = ({}) => {
  return (
    <div className={`${style.playButton}`}>
      <img src={require('./play.png')}/>
    </div>
  );
};

export default PlayButton;
