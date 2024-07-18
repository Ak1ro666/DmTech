import cn from '@/shared/lib/classNames/classNames';

import styles from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { LangSwitcher } from '@/widgets/LangSwitcher';

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={cn(
                styles.Sidebar,
                {
                    [styles.collapsed]: collapsed,
                },
                [className],
            )}
        >
            <Button
                square
                size={ButtonSize.M}
                className={styles.ButtonCollapsed}
                onClick={onToggle}
                theme={ButtonTheme.PRIMARY}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher shortLang={collapsed} className={styles.lang} />
            </div>
        </div>
    );
};
