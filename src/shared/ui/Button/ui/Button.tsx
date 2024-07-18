import cn from '@/shared/lib/classNames/classNames';

import { ButtonProps, ButtonSize, ButtonTheme } from './Button.props';

import styles from './Button.module.scss';

export const Button = (props: ButtonProps) => {
    const {
        type = 'button',
        className,
        children,
        onClick,
        square,
        theme = ButtonTheme.PRIMARY,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    return (
        <button
            className={cn(
                styles.Button,
                {
                    [styles.square]: square,
                },
                [styles[theme], styles[size], className],
            )}
            type={type}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    );
};
