import styles from './Loader.module.scss';

export const Loader = () => {
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
};
