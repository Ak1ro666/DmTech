import { useTranslation } from 'react-i18next';

export const OrdersPage = () => {
    const { t } = useTranslation('orders');

    return <div>{t('Страница заказов')}</div>;
};
