import { Text, TextTheme } from '@/shared/ui/Text';
import { ProductType } from '../../model/types/productSchema';

import styles from './ProductItem.module.scss';

export const ProductItem = (props: ProductType) => {
    const { category, description, picture, price, rating, title, id } = props;

    return (
        <div className={styles.cart}>
            <img src={picture} alt={`Image - ${title}`} />
            <div className={styles.description}>
                <Text
                    theme={TextTheme.PRIMARY}
                    className={styles.titleProps}
                    text={title}
                />
                <Text
                    className={styles.price}
                    theme={TextTheme.PRIMARY}
                    text={`${price}₽`}
                />
            </div>
        </div>
    );
};
