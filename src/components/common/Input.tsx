import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import style from './../../style/Input.module.css'


type PropsInputType =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & {
        value: string | number,
        onChange: (e: ChangeEvent<HTMLInputElement>) => void,
        error?: boolean
    };

function Input(props: PropsInputType) {

    const { error, title, value, onChange, ...restProps } = props;

    return (
        <label>
            {title}
            <input className={error ? style.error_Input : ''}
                type='number'
                value={value}
                onChange={onChange} />
        </label>
    )
}

export default Input;