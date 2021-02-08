import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import style from './../../style/Button.module.css'

export type ReactButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & {
        title: string,
    }

function Button(props: ReactButtonProps) {

    const { title, ...restProps } = props;

    return <button className={style.button} {...restProps}>
        {title}
    </button>
}
export default Button; 