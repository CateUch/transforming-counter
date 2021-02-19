
import React, { useState } from 'react';
import Button from '../common/Button';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store/store';
import style from './../../style/counter.module.css';


export default function CounterDisplay(props: PropsType) {

  const { incButtonHandler, recButtonHandler, text, backToSet } = props
  const { counterMaxValue, value, counterIsActive, error } = useSelector((state: RootStateType) => state.counter)

  const [disableBtn,  setDisableBTN ] = useState(false);

  return (
    <>
      <div className={style.counterWrapper} >
        <div className={(value === counterMaxValue) ? style.counterDisplayError : style.counterDisplay}>
          {counterIsActive ? value : text}
        </div>
        <div className={style.counterBottom}>

        <Button title={'SET'}
            onClick={backToSet}
            disabled={(value === counterMaxValue || error || counterIsActive === false ? true : false)} />

          <Button title={'INC'}
            onClick={incButtonHandler}
            disabled={(value === counterMaxValue || error || counterIsActive === false || disableBtn===true ? true : false)} />

          <Button title={'RESET'}
            onClick= { () => { recButtonHandler(); setDisableBTN(true) }} 
            disabled={(value != counterMaxValue || error || disableBtn===true ? true : false)} />
        </div>
      </div>
    </>
  )
}


//types
type PropsType = {
  text: string,
  incButtonHandler: () => void,
  recButtonHandler: () => void,
  backToSet: () => void;
}
