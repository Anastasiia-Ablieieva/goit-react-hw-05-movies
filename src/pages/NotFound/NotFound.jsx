import { NavLink } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <p> Page not found...</p>
      <NavLink to="/"> Back to Home Page </NavLink>
    </>
  );
};

export default NotFound;