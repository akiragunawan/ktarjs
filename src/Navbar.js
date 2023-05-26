import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logokta from "./assets/ktalogo.png";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-okbank mt-2 mx-2 rounded-5 sticky-top">
			<Link to="/" className="navbar-brand ms-5" href="#">
				<img
					src={logokta}bank
					width="30"
					height="30"
					className="d-inline-block align-top me-2"
					alt=""
				></img>
				OK KTA
			</Link>
			<button
				className="navbar-toggler me-3"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse ms-3" id="navbarNavDropdown">
				<ul className="navbar-nav me-auto ">
					<div className="d-flex ">
						<div className="d-flex flex-column flex-lg-row flex-sm-row flex-md-row">
						<CustomLink to="/Simulation">Simulation</CustomLink>
						<CustomLink to="/Submission">Submission</CustomLink>
						</div>
					</div>
				</ul>
				<ul className="navbar-nav ms-auto">
					<div className="d-flex flex-column flex-lg-row flex-sm-row flex-md-row me-5">
						<CustomLink to="/login">Login</CustomLink>
						<CustomLink to="/Register">Register</CustomLink>
					</div>
				</ul>
			</div>
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
