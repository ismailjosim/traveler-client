import TopHeader from './TopHeader';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const RootLayout = () => {
    return (
        <>
            <TopHeader />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default RootLayout;
