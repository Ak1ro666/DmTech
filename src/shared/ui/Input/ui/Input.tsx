import cn from '@/shared/lib/classNames/classNames';
import styles from './Input.module.scss';
import { InputProps, InputTheme } from './Input.props';
import { ChangeEvent, memo } from 'react';

export const Input = memo((props: InputProps) => {
    const {
        type = 'text',
        value,
        onChange,
        theme = InputTheme.PRIMARY,
        placeholder,
        className,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={styles.InputWrapper}>
            <input
                placeholder={placeholder}
                value={value}
                type={type}
                onChange={onChangeHandler}
                className={cn(styles.Input, {}, [styles[theme], className])}
                {...otherProps}
            />
        </div>
    );
});
