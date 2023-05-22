import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import sucess1 from "../../assets/success1.png";
function PersonalInformation() {
	const { state } = useLocation();
	const [PhoneNumber] = useState(state?.Phone);

	return (
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
								{/* Proggress bar */}
								<div className="mt-5 mb-3 px-5 pt-3">
									<div className="progress" style={{ height: "5px" }}>
										<div
											className="progress-bar"
											role="progressbar"
											style={{ width: "25%" }}
											aria-valuenow="25"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
									<div className="d-flex justify-content-evenly">
										<div className="mt-2 d-flex flex-column justify-content-center">
											<div className="text-center">
												<div className="text-primary">|</div>
											</div>
											<div>
												<p className="fw-bold text-primary text-uppercase">
													KTP Input
												</p>
											</div>
										</div>
										<div className="mt-2 d-flex flex-column justify-content-center">
											<div className="text-center">
												<div className="text-primary">|</div>
											</div>
											<div>
												<p className=" text-primary text-uppercase">
													Additional Data
												</p>
											</div>
										</div>
										<div className="mt-2 d-flex flex-column justify-content-center">
											<div className="text-center ">
												<div className="text-primary">|</div>
											</div>
											<div>
												<p className=" text-primary text-uppercase">Done</p>
											</div>
										</div>
									</div>
								</div>
								{/* Proggress bar */}
								<div className="row g-0">
									<div className="text-center col-md-6 col-lg-5 d-none d-md-block mt-auto mb-auto ">
										<img
											src={sucess1}
											alt="login form"
											className="img-fluid"
											style={{ borderRadius: "1rem 0 0 1rem", width: "280px" }}
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
															Almost There!!
														</span>
													</div>
													<div className="text-muted mt-3">
														Complete Your KTP Checking Data!
													</div>

													<div>
														<div className="form-floating mt-3">
															<input
																className="form-control"
																id="NIKInput"
																placeholder="NIK"
															/>
															<label htmlFor="NIKInput">NIK*</label>
															<div className="form-floating mt-3">
																<input
																	className="form-control"
																	id="NameInput"
																	placeholder="Nama"
																/>
																<label htmlFor="NameInput">
																	Nama (Sesuai KTP)
																</label>
															</div>
															<div className="form-floating mt-3">
																<input
																	type="date"
																	className="form-control"
																	id="DOBInput"
																	placeholder="DOB"
																/>
																<label htmlFor="DOBInput">Tanggal Lahir*</label>
															</div>
															<div className="form-floating mt-3">
																<input
																	className="form-control"
																	id="AddressInput"
																	placeholder="Alamat"
																/>
																<label htmlFor="AddressInput">Alamat*</label>
															</div>
															<div class="input-group mt-3">
																<label
																	className="input-group-text"
																	for="inputGroupSelect01"
																>
																	Wilayah
																</label>
																<select
																	className="form-select"
																	id="inputGroupSelect01"
																>
																	<option selected>Choose...</option>
																	<option value="1">One</option>
																	<option value="2">Two</option>
																	<option value="3">Three</option>
																</select>
															</div>
															<div className="d-flex mt-3">
																<div
																	className="my-auto fw-bold pt-3 pe-3 ps-2 bg-secondary-outline rounded border border-1 text-dark me-1"
																	style={{
																		fontSize: "1.2rem",
																		paddingBottom: "12px",
																	}}
																>
																	+62
																</div>
																<div className="form-floating w-100">
																	<input
																		type="number"
																		className="form-control"
																		id="floatingPhoneNumber"
																		placeholder="Phone Number"
																		value={PhoneNumber}
																		required
																		disabled
																	/>
																	<label htmlFor="floatingPhoneNumber">
																		Phone Number
																	</label>
																</div>
															</div>
															<div>
																<Link
																	to="/additionaldata"
																	className="btn btn-primary btn-lg text-white mt-3 w-100"
																>
																	Next
																</Link>
															</div>
														</div>
													</div>
												</div>
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

export default PersonalInformation;
