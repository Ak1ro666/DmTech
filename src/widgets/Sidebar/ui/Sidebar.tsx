import cn from '@/shared/lib/classNames/classNames';

import styles from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { useState } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/Button';

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
                className={styles.ButtonCollapsed}
                onClick={onToggle}
                theme={ButtonTheme.PRIMARY}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.switchers}>
                {/* LangSwitcher */}
                <ThemeSwitcher />
            </div>
        </div>
    );
};
