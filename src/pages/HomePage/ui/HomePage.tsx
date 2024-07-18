import { useTranslation } from 'react-i18next';

export const HomePage = () => {
    const { t } = useTranslation('main');

    return <div>{t('Главная страница')}</div>;
};
