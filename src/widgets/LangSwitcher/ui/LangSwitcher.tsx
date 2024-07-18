import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';

import styles from './LangSwitcher.module.scss';
import cn from '@/shared/lib/classNames/classNames';

interface LangSwitcherProps {
    className?: string;
    shortLang: boolean;
}

export const LangSwitcher = ({ className, shortLang }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLang = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={cn(styles.LangSwitcher, {}, [className])}
            theme={ButtonTheme.INVERTED_PRIMARY}
            onClick={toggleLang}
        >
            {t(shortLang ? 'Яз' : 'Язык')}
        </Button>
    );
};
