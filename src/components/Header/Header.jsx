import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <NavLink to={'/'}> Home </NavLink>
            <NavLink to={'/movies'}> Movies </NavLink>
        </>
    )
}

export default Header;