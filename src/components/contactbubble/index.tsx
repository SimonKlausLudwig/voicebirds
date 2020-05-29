import React, {FunctionComponent} from 'react';
import * as style from './style.module.scss';
import {Link} from "gatsby";

const ContactBubble: FunctionComponent<{ }> = (props) => {
  return (
    <div className={style.contactBubbleWrapper}>
      <img src={require('./bg.svg')}/>
      <div className={style.contactInfo}>
        <h1>So erreichst du uns</h1>
        <p>So erreichst du uns Wir können deine Fragen auch gerne telefonisch oder per E-Mail klären.</p>
        <b>hello@videobakers.de</b>
        <b>+49 7541 400 4109</b>
      </div>
    </div>
  );
};

export default ContactBubble;
