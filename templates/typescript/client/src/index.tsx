import './index.css'
import {StrictMode as Strict} from 'react'
import {createRoot as create} from 'react-dom/client'
import App from './App.tsx'
import Apollo from '@/providers/Apollo.tsx';
import Query from '@/providers/Query.tsx';
import Store from "@/providers/Store.tsx";
import State from "@/providers/State.tsx";

create(document.querySelector('.react')!).render(
    <>
        <Strict>
            <Query>
                <Apollo>
                    <Store>
                        <State>
                            <App/>
                        </State>
                    </Store>
                </Apollo>
            </Query>
        </Strict>
    </>
);