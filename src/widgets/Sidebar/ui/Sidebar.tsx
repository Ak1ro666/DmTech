import cn from '@/shared/lib/classNames/classNames';

import styles from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    return (
        <div className={cn(styles.Sidebar, {}, [className])}>
            <div></div>
            <ThemeSwitcher />
        </div>
    );
};
