import './index.css'
import {createRoot as create} from 'react-dom/client'
import {StrictMode as Strict} from 'react'
import Query from '@/providers/Query.jsx';
import Apollo from '@/providers/Apollo.jsx';
import Store from '@/providers/Store.jsx';
import State from '@/providers/State.jsx';
import App from './App.jsx'

create(document.querySelector('.react')).render(
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