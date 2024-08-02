import { Loader } from '@/shared/ui/Loader';

import styles from './PageLoader.module.scss';
import { memo } from 'react';

export const PageLoader = memo(() => {
    return (
        <div className={styles.page}>
            <Loader />
        </div>
    );
});
