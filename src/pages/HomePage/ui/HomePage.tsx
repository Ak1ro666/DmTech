import { Page } from '@/shared/ui/Page';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

export const HomePage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <div>{t('Главная страница')}</div>
        </Page>
    );
});
