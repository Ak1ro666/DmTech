import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './stateSchema';
import { userReducer } from '@/entities/User';
import { productReducer } from '@/entities/Product';
import { $api } from '@/shared/api/interceptors';
import { useNavigate } from 'react-router-dom';

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        product: productReducer,
    };

    const navigate = useNavigate();

    const store = configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: false,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                        navigate,
                    },
                },
            }),
    });

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
