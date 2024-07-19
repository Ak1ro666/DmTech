import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/config/router/router.config';

export const NotFoundPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate(RoutePath.home);
    };

    return (
        <div className={styles.page}>
            <h1>{t('Страница не найдена')}</h1>
            <Button theme={ButtonTheme.PRIMARY} onClick={navigateToHome}>
                {t('Перейти на главную страницу')}
            </Button>
        </div>
    );
};
