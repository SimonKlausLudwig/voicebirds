import React, {FunctionComponent} from 'react';
import * as style from './style.module.scss';


const BlockTitle: FunctionComponent<{ title: string, description: string }> = ({title, description}) => {
  console.log(style);
  return (
    <div className={`${style.blockTitle}`}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default BlockTitle;
