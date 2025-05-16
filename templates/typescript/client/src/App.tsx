import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router';
import Layout from './Layout.tsx';
import Home from "./pages/Home.tsx";

const App = () => {

    const router = createBrowserRouter([
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
            <RouterProvider router={router}/>
        </>
    );
};

export default App;