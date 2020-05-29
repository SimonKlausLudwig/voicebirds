import React, {FunctionComponent} from 'react';
import * as style from './style.module.scss';


const QuickLink: FunctionComponent<{ }> = ({}) => {
  return (
    <div className={style.quickLink}>
      <b>Was sagen unsere Kunden</b>
      <img src={"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGlkPSJhcnJvdy1yaWdodCI+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMjkuMDgiIHgyPSIzLjA4IiB5MT0iMTYiIHkyPSIxNiIvPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjI5LjA4IiB4Mj0iMjUuMDgiIHkxPSIxNiIgeTI9IjIxIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMjkuMDgiIHgyPSIyNS4wOCIgeTE9IjE2IiB5Mj0iMTEiLz48L2c+PC9zdmc+"}/>
    </div>
  );
};

export default QuickLink;
