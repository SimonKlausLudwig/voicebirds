import React, {FunctionComponent} from 'react';
import * as style from './style.module.scss';
import Button, {ButtonSize} from "../button";


const Person: FunctionComponent<{ name: string, description: string, mail: string }> = ({name, description, mail}) => {
  return (
    <div className={style.person}>
      <img src={"https://videobakers.de/static/michael-5a09a8ca268e653c11c3d678a9f40165.jpg"  }/>
      <div className={style.infos}>
        <h2>{name}</h2>
        <p className={style.personDescription}>{description}</p>
        <Button buttonSize={ButtonSize.BIG} secondary={true} onClick={() => {}}>E-Mail schreiben</Button>
      </div>
    </div>
  );
};

export default Person;
