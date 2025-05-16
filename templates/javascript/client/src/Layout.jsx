import {Outlet} from 'react-router';
import Splash from '@/components/Splash.jsx';

const Layout = () => {
    return (
        <>
            <Splash/>
            <Outlet/>
        </>
    );
};

export default Layout;