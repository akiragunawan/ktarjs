import { Link, Navigate, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import logokta from "./assets/ktalogo.png";
// import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

export default function Navbar() {
	const [Name, setName] = useState();
	const navigate = useNavigate();
	var jwt = sessionStorage.getItem("jwt");

	useEffect(() => {
		if (jwt) {
			getProfile();
		}
	}, [Name,jwt]);

	const HandleLogout = async () => {
		await fetch(process.env.REACT_APP_SERVER + "/api/v1/auth/logout", {
			method: "POST",
			// mode: "cors",
			// cache: "no-cache",
			// credentials: "same-origin",
			headers: {
				// "Content-Type": "application/x-www-form-urlencoded",
				Accept: "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "*",
				"Access-Control-Allow-Credentials": "true",
				Authorization: `Bearer ${jwt}`,
				// // "Content-Type": "application/json",
			},
			// redirect: "follow",
			// referrerPolicy: "no-referrer",
			// body: new URLSearchParams(data),
		}).then((response) => {
			response
				.json()
				.then((data) => {
					if (response.status === 200) {
						sessionStorage.removeItem("jwt");
						navigate("/");
					}
				})
				.catch((err) => {
					console.log(err);
				});
		});
	};

	const getProfile = async () => {
		if (jwt) {
			await fetch(process.env.REACT_APP_SERVER + "/api/v1/auth/me", {
				method: "GET",
				// mode: "cors",
				// cache: "no-cache",
				// credentials: "same-origin",
				headers: {
					// "Content-Type": "application/x-www-form-urlencoded",
					"Accept": "application/json",
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Headers": "*",
					"Access-Control-Allow-Credentials": "true",
					Authorization: `Bearer ${jwt}`,
					// // "Content-Type": "application/json",
				},
				// redirect: "follow",
				// referrerPolicy: "no-referrer",
				// body: new URLSearchParams(data),
			}).then((response) => {
				response
					.json()
					.then((data) => {
						setName(data.name);
						console.log(Name);
					})
					.catch((err) => {
						console.log(err);
					});
			});
		}
	};
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-okbank mt-2 mx-2 rounded-5 sticky-top">
			<Link to="/" className="navbar-brand ms-5" href="#">
				<img
					src={logokta}
					bank
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
				{sessionStorage.getItem("jwt") ? (
					<ul
						className="navbar-nav ms-auto "
						style={{ right: 0, left: "auto" }}
					>
						<li className="nav-item dropdown-center me-5 ">
							<a
								className="nav-link dropdown-toggle text-capitalize"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								{Name}
							</a>
							<ul
								className="dropdown-menu bg-okbank border-0 mt-3"
								style={{ right: 0, left: "auto", textAlign: "right" }}
							>
								<li className="mb-2">
									<Link className="dropdown-item text-light" to="/profile">
										Profile
									</Link>
								</li>
								<li>
									<a
										className="dropdown-item text-light"
										onClick={HandleLogout}
									>
										Logout
									</a>
								</li>
							</ul>
						</li>
					</ul>
				) : (
					<ul className="navbar-nav ms-auto">
						<div className="d-flex flex-column flex-lg-row flex-sm-row flex-md-row me-5">
							<CustomLink to="/login">Login</CustomLink>
							<CustomLink to="/Register">Register</CustomLink>
						</div>
					</ul>
				)}
			</div>
		</nav>
	);
}

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });

	return (
		<li className={isActive ? "active nav-item nav-link" : "nav-item nav-link"}>
			<Link className="nav-link nav-item text-capitalize" to={to} {...props}>
				{children}
			</Link>
		</li>
	);
}
