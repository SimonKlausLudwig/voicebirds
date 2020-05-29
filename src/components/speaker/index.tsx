import React, {FunctionComponent} from 'react';
import * as style from './style.module.scss';
import {Link} from "gatsby";
import PlayButton from "../playbutton";
import Button from "../button";

export enum SpeakerArea {
  PHONE = "Telefon", RADIO = "Radio"
}

const Speaker: FunctionComponent<{ name: string, image: string, mp3: string, areas: SpeakerArea[] }> = ({image, mp3, name, areas}) => {
  console.log(style);
  return (
    <div className={style.speakerWrapper}>
      <img className={style.speakerAvatar} src={require('./person.png')}/>
      <div className={`${style.speaker}`}>
        <b>{name}</b>
        <p>{areas.join(" | ")}</p>
        <div className={style.buttonBar}>
          <PlayButton/>
          <Button secondary={true} onClick={() => {}}>Buchen</Button>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
