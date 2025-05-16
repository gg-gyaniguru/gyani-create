import {Provider} from 'react-redux';
import store from '@/store/index.js';

const Store = ({children}) => {
    return (
        <>
            <Provider store={store}>
                {children}
            </Provider>
        </>
    );
};

export default Store;