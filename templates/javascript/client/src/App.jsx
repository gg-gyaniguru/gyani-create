import './App.css'
import {createBrowserRouter as create, RouterProvider as Provider} from "react-router";
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';

const App = () => {

    const router = create([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '',
                    element: <Home/>
                }
            ]
        }
    ]);

    return (
        <>
            <Provider router={router}/>
        </>
    );
};

export default App;