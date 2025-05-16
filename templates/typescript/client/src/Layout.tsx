import Splash from '@/components/Splash.tsx';
import {Outlet} from 'react-router';

const Layout = () => {
    return (
        <>
            <Splash/>
            <Outlet/>
        </>
    );
};

export default Layout;