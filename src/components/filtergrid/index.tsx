import React, {FunctionComponent, useState} from 'react';
import * as style from './style.module.scss';
import Button, {ButtonMode, ButtonSize} from "../button";


export enum PriceModes {
  BUDGET = "budget",
  PREMIUM = "premium",
  ENTERPRISE = "enterprise",
  ALL = "all"
}

const FilterGrid: FunctionComponent<{ items: (type?: any) => any[] }> = ({items}) => {
  const [current, setCurrent] = useState<PriceModes>(PriceModes.ENTERPRISE);
  return (
    <div className={style.filterContainer}>
      <div className={style.filter}>
        <Button buttonMode={current === PriceModes.BUDGET ? ButtonMode.NORMAL : ButtonMode.OUTLINE}
                buttonSize={ButtonSize.MEDIUM} onClick={() => setCurrent(PriceModes.BUDGET)}>Budget</Button>
        <Button buttonSize={ButtonSize.MEDIUM}
                buttonMode={current === PriceModes.PREMIUM ? ButtonMode.NORMAL : ButtonMode.OUTLINE}
                onClick={() => setCurrent(PriceModes.PREMIUM)}>Premium</Button>
        <Button
          buttonMode={current === PriceModes.ENTERPRISE ? ButtonMode.NORMAL : ButtonMode.OUTLINE}
          buttonSize={ButtonSize.MEDIUM} onClick={() => setCurrent(PriceModes.ENTERPRISE)}>Enterprise</Button>
      </div>
      <div className={`${style.filterGrid}`}>
        {items(current).map(item => item)}
      </div>
      <div className={style.viewMore}>
        <Button buttonSize={ButtonSize.BIG} onClick={() => {
        }}>Alle sprecher anhören</Button>
      </div>
    </div>
  );
};

export default FilterGrid;
