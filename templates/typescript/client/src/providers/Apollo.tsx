import {ReactNode} from 'react';
import {ApolloProvider as Provider} from '@apollo/client';
import apollo from '@/configurations/apollo.ts';

type Apollo = {
    children: ReactNode;
}

const Apollo = ({children}:Apollo) => {
    return (
        <Provider client={apollo}>
            {children}
        </Provider>
    );
};

export default Apollo;