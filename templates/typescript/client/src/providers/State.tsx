import {ReactNode, useState} from 'react';
import {Provider} from "@/configurations/state.js";

type State = {
    children: ReactNode;
}

const State = ({children}: State) => {

    const [client, setClient] = useState(undefined);

    const value = {
        client,
        setClient,
    }

    return (
        <>
            <Provider value={value}>
                {children}
            </Provider>
        </>
    );
};

export default State;