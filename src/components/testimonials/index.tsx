import React, {FunctionComponent} from 'react';
import * as style from './style.module.scss';


const Testimonial: FunctionComponent<{ name: string,
  company: string,
  quotes: boolean,
  description: string }> = ({name,company,quotes, description}) => {
  return (
    <div className={`${style.testimonialWrapper}`}>
      {quotes && <img className={style.background} src={require('./rectangle-3.svg')}/>}
      {!quotes && <img className={style.marks} src={"https://cdn.zeplin.io/5b0dc96bbbadc157a4fa26ed/assets/DBCDE4D2-C241-4347-9616-66DB29687C89.svg"}/>}
      <div className={`${style.testimonial}`}>
        <div className={style.person}>
          <img src={"https://videobakers.de/static/simon-0e10fd8cf536bff7e00cb54af6874f2e.jpg"}/>
          <b className={style.author}>Carla Lumpi</b>
          <p className={style.company}>CEO, Good Vibrations Anmations GmbH</p>
        </div>
        <p>Ein Segen das wir die Jungs gefunden haben. Jetzt haben wir schnell und einfach die passenden Sprecher für einen super Preis. Ich hoffe Sie können das Niveau halten!</p>
      </div>
    </div>
  );
};

export default Testimonial;
