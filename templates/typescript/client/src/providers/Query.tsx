import {ReactNode} from 'react';
import {QueryClientProvider as Provider} from '@tanstack/react-query';
import query from '@/configurations/query.ts';

type Query = {
    children: ReactNode;
}

const Query = ({children}:Query) => {
    return (
        <>
            <Provider client={query}>
                {children}
            </Provider>
        </>
    );
};

export default Query;