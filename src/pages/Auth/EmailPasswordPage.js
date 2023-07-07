import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import emailpassword from "../../assets/emailpassword.png";

function EmailPasswordPage() {
	const { state } = useLocation();
	const [PhoneNumber] = useState(state?.Phone);
	const [Email, setEmail] = useState();
	const [Password, setPassword] = useState();
	const [ConfirmPassword, setConfirmPassword] = useState();
	const [DiffrentPassword, setDiffrentPassword] = useState(false);

	const [EmailError, setEmailError] = useState(false);
	const [NotMatchPasswordError, setNotMatchPasswordError] = useState(false);
	const [PasswordCharactersError, setPasswordCharactersError] = useState(false);
	const [EmailExist, setEmailExist] = useState(false);
	const [LoadingScreen, setLoadingScreen] = useState(false);
	const navigate = useNavigate();

	const CreateAccount = async (e) => {
		e.preventDefault();
		setLoadingScreen(true);
		setNotMatchPasswordError(false);
		setPasswordCharactersError(false);
		setEmailExist(false);
		if (Email.includes("@") && Email.includes(".")) {
			setEmailError(false);
			if (Password.length >= 8) {
				if (ConfirmPassword === Password) {
					setNotMatchPasswordError(false);
					setPasswordCharactersError(false);

					var data;
					data = {
						email: Email,
						password: Password,
						phone_num: PhoneNumber,
					};
	
					await fetch(process.env.REACT_APP_SERVER + "/api/v1/auth/register", {
						method: "POST",
						// mode: "cors",
						// cache: "no-cache",
						// credentials: "same-origin",
						headers: {
							"Content-Type": "application/x-www-form-urlencoded",
							"Accept": "application/json",
							"Access-Control-Allow-Origin": "*",
							"Access-Control-Allow-Headers": "*",
							"Access-Control-Allow-Credentials": "true",
							// Authorization: `Bearer ${jwt}`,
						},

						body: new URLSearchParams(data),
					}).then((response) => {
						response
							.json()
							.then((data) => {
								if (data.access_token) {
									setLoadingScreen(false);
									sessionStorage.setItem("jwt", data.access_token);
									navigate("/additionaldata", { state: { Phone: PhoneNumber } });
									setEmailExist(false);
								} else {
									setEmailExist(true);
									setLoadingScreen(false);
								}
							})
							.catch((err) => {
								console.log(err);
							});
					});
				} else {
					setNotMatchPasswordError(true);
					setLoadingScreen(false);
				}
			} else {
				setPasswordCharactersError(true);
				setLoadingScreen(false);
			}
		}
	};

	return (
		<motion.div
			initial={{ x: "-100vw" }}
			animate={{ x: 0 }}
			exit={{ x: "100vw" }}
			transition={{ duration: 0.2, origin: 1 }}
		>
			{LoadingScreen ? (
				<motion.div
					initial={{ x: 0, y: 0, scale: 0 }}
					animate={{ x: 0, y: 0, scale: 1.1 }}
					exit={{ x: 0, y: 0, scale: 0 }}
					transition={{ duration: 1, type: "spring", bounce: 0.6 }}
					className="body-loading position-absolute w-100"
					style={{ zIndex: 1000 }}
				>
					<div className="animation-container">
						<div className="lightning-container">
							<div className="lightning white"></div>
							<div className="lightning red"></div>
						</div>
						<div className="boom-container">
							<div className="shape circle big white"></div>
							<div className="shape circle white"></div>
							<div className="shape triangle big yellow"></div>
							<div className="shape disc white"></div>
							<div className="shape triangle blue"></div>
						</div>
						<div className="boom-container second">
							<div className="shape circle big white"></div>
							<div className="shape circle white"></div>
							<div className="shape disc white"></div>
							<div className="shape triangle blue"></div>
						</div>
					</div>
				</motion.div>
			) : (
				""
			)}

			<section className="vh-100">
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col col-xl-10">
							{EmailExist ? (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 100, y: 0 }}
									exit={{ opacity: 0, y: 10 }}
									transition={{ duration: 0.2 }}
									className="alert alert-danger"
									role="alert"
								>
									Email Already Exist Please use Other Email
								</motion.div>
							) : (
								""
							)}

							<div className="card shadow" style={{ borderRadius: "1rem" }}>
								<div className="row g-0">
									<div className="col-md-6 col-lg-5 d-none d-md-block mt-auto mb-auto">
										<img
											src={emailpassword}
											alt="login form"
											className="img-fluid "
											style={{ borderRadius: "1rem 0 0 1rem" }}
										/>
									</div>

									<div className="col-md-6 col-lg-7 d-flex align-items-center">
										<div className="card-body p-4 p-lg-5 text-black">
											<div className=" mb-3 pb-1">
												<span className="h1">OK KTA</span>

												<div className="fw-normal text-uppercase ">
													<span
														style={{
															letterSpacing: "1px",
															backgroundColor: "#ff7954",
															color: "white",
														}}
														className="my-auto p-1 fw-bold"
													>
														Connect Your Account with your Email
													</span>
												</div>
											</div>
											<form onSubmit={CreateAccount}>
												<div className="d-flex flex-column">
													<div className="form-floating w-100 mt-3">
														<input
															type="email"
															className="form-control"
															id="FloatingEmail"
															placeholder="Phone Number"
															onChange={(e) => {
																setEmail(e.target.value);
															}}
															required
														/>
														<label htmlFor="FloatingEmail">Email</label>
													</div>
													<motion.div
														initial={{ opacity: 0, y: 10 }}
														animate={{ opacity: 100, y: 0 }}
														exit={{ opacity: 0, y: 10 }}
														transition={{ duration: 0.2 }}
														className={
															EmailError ? "text-danger fw-bold" : "d-none"
														}
													>
														Wrong Email Format
													</motion.div>
													<div className="form-floating w-100 mt-3">
														<input
															type="password"
															className="form-control"
															id="FloatingPassword"
															placeholder="Phone Number"
															onChange={(e) => setPassword(e.target.value)}
															required
														/>
														<label htmlFor="FloatingPassword">Password</label>
													</div>
													<div className="form-floating w-100 mt-3">
														<input
															type="password"
															className="form-control"
															id="FloatingConfirmPassword"
															placeholder="Phone Number"
															onChange={(e) =>
																setConfirmPassword(e.target.value)
															}
															required
														/>
														<label htmlFor="FloatingConfirmPassword">
															Confirm Password
														</label>
													</div>
													<div className="my-2">
														{PasswordCharactersError ? (
															<motion.div
																initial={{ opacity: 0, y: 10 }}
																animate={{ opacity: 100, y: 0 }}
																exit={{ opacity: 0, y: 10 }}
																transition={{ duration: 0.2 }}
																className="text-danger fw-bold"
															>
																Password should be atleat 8 Characters
															</motion.div>
														) : (
															<></>
														)}
														{NotMatchPasswordError ? (
															<motion.div
																initial={{ opacity: 0, y: 10 }}
																animate={{ opacity: 100, y: 0 }}
																exit={{ opacity: 0, y: 10 }}
																transition={{ duration: 0.2 }}
																className="text-danger fw-bold"
															>
																Password didnt Match
															</motion.div>
														) : (
															<></>
														)}
													</div>
												</div>

												<div className="pt-1 mb-4 mt-2">
													<button
														// to={"/otp"}
														// state={{ Phone: PhoneNumber }}
														className="btn btn-primary btn-lg w-100"
														style={{
															// backgroundColor: "#ff7954",
															color: "white",
															border: "none",
														}}
														type="submit"
														// onClick={CreateAccount}
													>
														Next
													</button>
												</div>
											</form>

											<p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
												Already have an Account?{" "}
												<Link to={"/Login"} style={{ color: "#393f81" }}>
													Sign In here
												</Link>
											</p>
											<a href="#!" className="small text-muted">
												Terms of use.
											</a>
											<a href="#!" className="small text-muted">
												Privacy policy
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</motion.div>
	);
}

export default EmailPasswordPage;
