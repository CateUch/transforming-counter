
import Input from '../common/Input';
import Button from '../common/Button';
import { RootStateType } from '../../store/store';
import style from './../../style/counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../../store/counterReducer';
import React, { ChangeEvent, useEffect, useState } from 'react';


type PropsType = {
    onmaxValue: (e: string) => void,
    onstartValue: (e: string) => void,
    onSetValues: () => void,
}

function CounterSetting(props: PropsType) {

    const {onmaxValue, onstartValue, onSetValues} = props

    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const { counterStartValue, counterMaxValue, value, error } = useSelector((state: RootStateType) => state.counter);

    useEffect(() => {
        (error) ? setText('Invalid values') : setText('enter values & press "set"')
    }, [error]);

    return (
        <>
            <div className={style.counterWrapper}>
                <div className={style.counterDisplay}>
                    <Input title='max value:'
                        value={counterMaxValue}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => { onmaxValue(e.currentTarget.value) }}
                        error={error} />
                    <Input title='max value:'
                        value={counterStartValue}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => { onstartValue(e.currentTarget.value) }}
                        error={error} />
                </div>
                <div className={style.counterBottom}>
                    <Button title={'SET'}
                        onClick={onSetValues}
                        disabled={error} />
                </div>
            </div>
        </>
    )
};

export default CounterSetting; 
