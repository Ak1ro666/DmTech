import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';

import cn from '@/shared/lib/classNames/classNames';
import { memo } from 'react';

interface LangSwitcherProps {
    className?: string;
    shortLang: boolean;
}

export const LangSwitcher = memo(
    ({ className, shortLang }: LangSwitcherProps) => {
        const { t, i18n } = useTranslation();

        const toggleLang = async () => {
            i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        };

        return (
            <Button
                className={cn('', {}, [className])}
                theme={ButtonTheme.INVERTED_PRIMARY}
                size={ButtonSize.S}
                onClick={toggleLang}
            >
                {t(shortLang ? 'Короткий язык' : 'Язык')}
            </Button>
        );
    },
);
