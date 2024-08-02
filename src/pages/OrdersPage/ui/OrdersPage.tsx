import { Page } from '@/shared/ui/Page';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

export const OrdersPage = memo(() => {
    const { t } = useTranslation('orders');

    return (
        <Page>
            <div>{t('Страница заказов')}</div>
        </Page>
    );
});
