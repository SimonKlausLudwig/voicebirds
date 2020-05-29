import React, {FunctionComponent} from 'react';
import * as style from './style.module.scss';
import {Link} from "gatsby";


export enum ButtonSize {
  SMALL = style.small, MEDIUM = style.medium, BIG = style.big
}

export enum ButtonMode {
  NORMAL = style.normal, OUTLINE = style.outline
}

const Button: FunctionComponent<{ onClick: any, className?: string, buttonMode?: ButtonMode, buttonSize?: ButtonSize, secondary?: boolean }> = (props) => {
  const {children, buttonSize,className, buttonMode, secondary} = props;
  return (
    <button {...props} className={`${className} ${style.button} ${buttonSize} ${buttonMode} ${secondary ? style.secondary : ''}`}>
      {children}
    </button>
  );
};

export default Button;
