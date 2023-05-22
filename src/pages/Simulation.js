import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import sm from "../assets/simulation.png";
import { useState } from "react";

export default function Simulation() {
	const [Duration, setDuration] = useState();
	const [LoanAmount, setLoanAmount] = useState();



	return (
		<>
			<motion.div
				initial={{ x: "-100vw" }}
				animate={{ x: 0 }}
				exit={{ x: "100vw" }}
				transition={{ duration: 0.2, origin: 1 }}
			>
				<section className="vh-100">
					<div className="container py-5 h-100">
						<div className="row d-flex justify-content-center align-items-center h-100">
							<div className="col col-xl-10">
								<div className="card shadow" style={{ borderRadius: "1rem" }}>
									<div className="row g-0">
										<div className="col-md-6 col-lg-5 d-none d-md-block mt-auto mb-auto">
											<img
												src={sm}
												alt="login form"
												className="img-fluid "
												style={{ borderRadius: "1rem 0 0 1rem" }}
											/>
										</div>
										<div className="col-md-6 col-lg-7 d-flex align-items-center">
											<div className="card-body p-4 p-lg-5 text-black">
												<form>
													<div className=" mb-3 pb-1">
														<span className="h1">OK KTA Simulation</span>

														<div className="fw-normal text-uppercase ">
															<span
																style={{
																	letterSpacing: "1px",
																	backgroundColor: "#ff7954",
																	color: "white",
																}}
																className="my-auto p-1 fw-bold"
															>
																Count your Credit from our Simulator
															</span>
														</div>
													</div>
													<div className="d-flex ">
														<div
															className="my-auto fw-bold pt-3 pe-3 ps-3 bg-secondary rounded text-light me-1"
															style={{
																fontSize: "1.2rem",
																paddingBottom: "12px",
															}}
														>
															Rp
														</div>
														<div className="form-floating w-100">
															<input
																type="number"
																className="form-control"
																id="floatingPhoneNumber"
																placeholder="Phone Number"
																onChange={(e) => setLoanAmount(e.target.value)}
																required
															/>
															<label htmlFor="floatingPhoneNumber">
																Loan Amount (*in Rp.)
															</label>
														</div>{" "}
													</div>
													<div className="input-group mb-3 mt-3">
														<label
															className="input-group-text"
															htmlFor="inputGroupSelect01"
														>
															Loan Duration
														</label>
														<select
															className="form-select"
															id="inputGroupSelect01"
															onChange={(e) => {
																setDuration(e.target.value);
															}}
															required
														>
															<option selected disabled>
																Choose...
															</option>
															<option value="3">3 month</option>
															<option value="6">6 month</option>
															<option value="12">12 month</option>
															<option value="24">24 month</option>
															<option value="36">36 month</option>
														</select>
													</div>
													<div className="pt-1 mb-4 mt-3">
														<Link
															to={"/otp"}
															// state={{ phone: PhoneNumber }}
															className="btn btn-primary btn-lg w-100"
															style={{
																// backgroundColor: "#ff7954",
																color: "white",
																border: "none",
															}}
														>
															Calculate
														</Link>
													</div>

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
		</>
	);
}
