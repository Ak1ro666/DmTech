import { AppDispatch } from '@/app/providers/StoreProvider/config/store';
import styles from './GoodsPage.module.scss';
import { productActions } from '@/entities/Product';
import { getProductData } from '@/entities/Product/model/selectors/getProductData/getProductData';
import { getProducts } from '@/entities/Product/model/services/getProducts';
import { Page } from '@/shared/ui/Page';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductItem } from '@/entities/Product/ui/ProductItem/ProductItem';

export const GoodsPage = memo(() => {
    const dispatch = useDispatch<AppDispatch>();

    const { products, page, hasMore, isLoading } = useSelector(getProductData);

    const onLoadNextPage = async () => {
        if (hasMore && !isLoading) {
            dispatch(productActions.setPage(page + 1));
            dispatch(getProducts({ page: page + 1 }));
        }
    };

    useEffect(() => {
        dispatch(getProducts({ page: 1 }));
    }, []);

    return (
        <Page className={styles.container_page} onScrollEnd={onLoadNextPage}>
            <div className={styles.container}>
                {products.map((product) => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </div>
            {isLoading && (
                <div
                    style={{
                        padding: '20px',
                        width: '100%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '15px',
                    }}
                >
                    {Array(10)
                        .fill(1)
                        .map((el, index) => (
                            <div
                                key={index}
                                style={{
                                    width: '300px',
                                    height: '550px',
                                    background: 'gray',
                                }}
                            ></div>
                        ))}
                </div>
            )}
        </Page>
    );
});
