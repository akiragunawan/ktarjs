import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-2 mx-2 rounded sticky-top">
      <Link to="/" className="navbar-brand ms-5" href="#">
        <img
          src="/docs/4.0/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""></img>
        OK KTA
      </Link>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {/* <div className="d-flex ms-auto"> */}
          {/* <div className="d-flex "> */}
          <CustomLink to="/Simulation">Simulation</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          {/* </div> */}
          {/* <div className="d-flex "> */}
          <CustomLink to="/login">Login</CustomLink>
          <CustomLink to="/Register">Register</CustomLink>
          {/* </div> */}
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active nav-item nav-link" : "nav-item nav-link"}>
      <Link className="nav-link nav-item" to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
