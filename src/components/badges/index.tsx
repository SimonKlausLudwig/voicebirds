import React, {FunctionComponent} from 'react';
import * as style from './style.module.scss';
import bgImage from './group-5.svg';


const Badge: FunctionComponent<{ image: string, className?: string }> = ({image,className = ""}) => {
  console.log(style);
  return (
    <div className={`${style.badge} ${className}`}>
      <img className={style.stars} src={require('./stars.png')}/>
      <div>7 Bewertungen</div>
      <img src={image}/>
    </div>
  );
};


const Badges: FunctionComponent<{ logo?: string }> = ({logo = ""}) => {
  console.log(style);
  return (
    <div className={style.badges}>
      <img src={bgImage}/>
      <Badge className={style.googleBadge}
             image={require('./google-2015-logo.svg')}
      />
      <Badge
        image={require('./proven-expert.svg')}
        className={style.provenBadge}/>
    </div>
  );
};

export default Badges;
