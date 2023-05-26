import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import emailpassword from "../../assets/emailpassword.png";
import { Toast, ToastContainer } from "react-bootstrap";

function EmailPasswordPage() {
	const { state } = useLocation();
	const [PhoneNumber] = useState(state?.Phone);
	const [Email, setEmail] = useState();
	const [Password, setPassword] = useState();
	const [ConfirmPassword, setConfirmPassword] = useState();
	const [DiffrentPassword, setDiffrentPassword] = useState(false);
	const [ErrorClass, setErrorClass] = useState(false);

	const tryEmail = () => {
		if (Password !== ConfirmPassword) {
			setDiffrentPassword(!DiffrentPassword);
		} else {
			setDiffrentPassword(false);
		}
	};

	return (
		<motion.div
			initial={{ x: "-100vw" }}
			animate={{ x: 0 }}
			exit={{ x: "100vw" }}
			transition={{ duration: 0.2, origin: 1 }}
		>
			{/* <div
				aria-live="polite"
				aria-atomic="true"
				className="bg-dark position-relative"
				// style={{ minHeight: "240px" }}
			> */}
			<ToastContainer className="p-3" position="top-end" style={{ zIndex: 1 }}>
				<Toast
					bg="danger"
					show={DiffrentPassword}
					onClose={() => setDiffrentPassword(false)}
				>
					<Toast.Header closeButton={true}>
						<img
							src="holder.js/20x20?text=%20"
							className="rounded me-2"
							alt=""
						/>
						<strong className="me-auto">Bootstrap</strong>
						<small>11 mins ago</small>
					</Toast.Header>
					<Toast.Body>Hello, world! This is a toast message.</Toast.Body>
				</Toast>
			</ToastContainer>
			{/* </div> */}

			<section className="vh-100">
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col col-xl-10">
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
											<form>
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
												<form>
													<div className="d-flex flex-column">
														{/* <div className="form-floating w-100">
														<input
															type="number"
															className="form-control"
															id="FloatingEmail"
															placeholder="Phone Number"
															onChange={(e) => {
																setEmail(e.target.value);
															}}
															required
														/>
														<label htmlFor="FloatingEmail">KTP*</label>
													</div> */}
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
													</div>

													<div className="pt-1 mb-4 mt-3">
														<a
															// to={"/otp"}
															// state={{ Phone: PhoneNumber }}
															className="btn btn-primary btn-lg w-100"
															style={{
																// backgroundColor: "#ff7954",
																color: "white",
																border: "none",
															}}
															onClick={tryEmail}
														>
															Next
														</a>
													</div>
												</form>

												<p
													className="mb-5 pb-lg-2"
													style={{ color: "#393f81" }}
												>
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
											</form>
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
