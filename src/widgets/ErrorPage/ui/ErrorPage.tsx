import { useTranslation } from 'react-i18next';
import styles from './ErrorPage.module.scss';
import { Button } from '@/shared/ui/Button';

export const ErrorPage = () => {
    const { t } = useTranslation();

    const onReload = () => {
        window.location.reload();
    };

    return (
        <div className={styles.page}>
            <h1>{t('Страница ошибки')}</h1>
            <Button onClick={onReload}>{t('Перезагрузить')}</Button>
        </div>
    );
};
