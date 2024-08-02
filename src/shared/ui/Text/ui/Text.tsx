import cn from '@/shared/lib/classNames/classNames';
import styles from './Text.module.scss';
import { TextProps, TextTheme } from './Text.props';
import { memo } from 'react';

export const Text = memo((props: TextProps) => {
    const { className, title, text, theme = TextTheme.PRIMARY } = props;

    return (
        <div className={cn(styles.wrapper, {}, [styles[theme]])}>
            {title && (
                <p className={cn(styles.title, {}, [className])}>{title}</p>
            )}
            {text && <p className={cn(styles.text, {}, [className])}>{text}</p>}
        </div>
    );
});
