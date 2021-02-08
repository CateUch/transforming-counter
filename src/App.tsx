import React, { useEffect, useState } from 'react';
import style from './style/App.module.css';

import CounterSetting from './components/CounterSetting/CounterSetting';
import CounterDisplay from './components/CounterDisplay/CounterDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from './store/counterReducer';
import { RootStateType } from './store/store';



function App() {

  const [setIsActive, setSetIsActive] = useState(true);


  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { counterStartValue, counterMaxValue, value, error } = useSelector((state: RootStateType) => state.counter);

  useEffect(() => {
    (error) ? setText('Invalid values') : setText('enter values & press "set"')
  }, [error]);

  function onmaxValue(curValue: string) {
    dispatch(actionCreators.UpdMaxValueAC(Number(curValue)));
  };

  function onstartValue(curValue: string) {
    dispatch(actionCreators.UpdMinValueAC(Number(curValue)));
  };

  const onSetValues = () => {
    let value = counterStartValue;
    dispatch(actionCreators.SetValuesAC(value));
    setSetIsActive(false);
  };


  const incButtonHandler = () => {
    dispatch(actionCreators.IncrementAC())
    console.log('increment tab')
  };

  const recButtonHandler = () => {
    dispatch(actionCreators.ResetAC())
    console.log('reset tab')
  };

  const backToSet = () => {
    setSetIsActive(true)
  }

    return (
      <div className={style.app}>
    { (setIsActive === true) &&   <CounterSetting    onmaxValue={onmaxValue}
                                                 onstartValue={onstartValue}
                                                  onSetValues={onSetValues} />
  }
   { (setIsActive === false) &&

      <CounterDisplay text={text}
        backToSet={backToSet}
        incButtonHandler={incButtonHandler}
        recButtonHandler={recButtonHandler} />
  } 
  </div>
  )
}

export default App;
