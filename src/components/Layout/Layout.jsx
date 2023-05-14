import { Suspense } from "react";
import Header from "components/Header/Header";
import { Outlet } from "react-router-dom";
import css from './Layout.module.css'

const Layout = () => {
    return (
        <>
            <Header />
            <div className={css.pageContainer}>
                <Suspense>
                    <Outlet />
                </Suspense> 
            </div>

        </>
    )
}

export default Layout;