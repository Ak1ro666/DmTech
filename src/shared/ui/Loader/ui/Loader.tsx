import { memo } from 'react';
import styles from './Loader.module.scss';

export const Loader = memo(() => {
    return (
        <div className={styles['dot-spinner']}>
            <div className={styles['dot-spinner__dot']}></div>
            <div className={styles['dot-spinner__dot']}></div>
            <div className={styles['dot-spinner__dot']}></div>
            <div className={styles['dot-spinner__dot']}></div>
            <div className={styles['dot-spinner__dot']}></div>
            <div className={styles['dot-spinner__dot']}></div>
            <div className={styles['dot-spinner__dot']}></div>
            <div className={styles['dot-spinner__dot']}></div>
        </div>
    );
});
