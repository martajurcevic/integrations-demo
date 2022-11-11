import {Outlet, Link} from "react-router-dom";
import ByteChefSidebar from "../sidebar/ByteChefSidebar";

const Layout = () => {
    return (
        <>
        <ByteChefSidebar />
        <Outlet />
        </>
    )
};

export default Layout;