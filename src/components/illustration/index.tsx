import React, {FunctionComponent} from 'react';
import * as style from './style.module.scss';

const Illustration: FunctionComponent<{ src?: string }> = ({src = ""}) => {
  return (
    <div style={src ? {'backgroundImage': `url(${src})`} : {}} className={style.illustrationBg}/>
  );
};

export default Illustration;
