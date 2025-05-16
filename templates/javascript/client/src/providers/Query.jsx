import {QueryClientProvider as Provider} from '@tanstack/react-query';
import query from "@/configurations/query.js";

const Query = ({children}) => {
    return (
        <>
            <Provider client={query}>
                {children}
            </Provider>
        </>
    );
};

export default Query;