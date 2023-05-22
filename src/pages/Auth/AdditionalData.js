import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import sucess1 from "../../assets/success1.png";
function AdditionalData() {
	const { state } = useLocation();
	const [PhoneNumber] = useState(state?.Phone);

	const [StepOne, setStepOne] = useState(true);
	const [StepTwo, setStepTwo] = useState(false);
	const [StepThree, setStepthree] = useState(false);

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
								<div className="mt-5 me-auto ms-5 d-flex">
									<div className="my-auto">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-caret-left-fill text-primary"
											viewBox="0 0 16 16"
										>
											<path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
										</svg>
									</div>
									<div>
										<Link
											to="/pinfor"
											className="text-decoration-none text-primary"
										>
											Back
										</Link>
									</div>
								</div>
								{/* Proggress bar */}
								<div className="mt-3 mb-3 px-5 pt-3">
									{/* <div className="progress" style={{ height: "5px" }}>
										<div
											className="progress-bar"
											role="progressbar"
											style={{ width: "53%" }}
											aria-valuenow="25"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div>
									<div className="progress" style={{ height: "5px" }}>
										<div
											className="progress-bar"
											role="progressbar"
											style={{ width: "2%" }}
											aria-valuenow="25"
											aria-valuemin="0"
											aria-valuemax="100"
										></div>
									</div> */}

									<div>
										<div className="progress" style={{ height: "30px" }}>
											<div
												className="progress-bar progress-bar-striped progress-bar-animated"
												role="progressbar"
												style={{ width: "35%" }}
												aria-valuenow="30"
												aria-valuemin="0"
												aria-valuemax="100"
											>
												<div>
													<h5 className="text-uppercase my-auto">Ktp Input</h5>
												</div>
											</div>

											<div
												className="progress-bar progress-bar-striped progress-bar-animated"
												role="progressbar "
												style={{ width: StepTwo ? "35%" : "0%" }}
												aria-valuenow="30"
												aria-valuemin="0"
												aria-valuemax="100"
											>
												<div>
													<h5 className="text-uppercase my-auto">
														Additional Data
													</h5>
												</div>
											</div>
											<div
												className="progress-bar progress-bar-striped progress-bar-animated"
												role="progressbar "
												style={{ width: StepThree ? "35%" : "0%" }}
												aria-valuenow="20"
												aria-valuemin="0"
												aria-valuemax="100"
											>
												<div>
													<h5 className="text-uppercase my-auto">Done</h5>
												</div>
											</div>
										</div>
									</div>

									{/* <div className="d-flex justify-content-evenly">
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
									</div> */}
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
															{StepOne && StepTwo && StepThree
																? "DONE"
																: "Almost There"}
														</span>
													</div>
													<div className="text-muted mt-3">
														{StepOne && StepTwo && StepThree
															? "Registration Complete, Thank you for your cooperation"
															: "Complete Your Registration by fill these below!"}
													</div>
													{StepOne && !StepTwo && !StepThree ? (
														// form 1
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
																	<label htmlFor="DOBInput">
																		Tanggal Lahir*
																	</label>
																</div>
																<div className="form-floating mt-3">
																	<input
																		className="form-control"
																		id="AddressInput"
																		placeholder="Alamat"
																	/>
																	<label htmlFor="AddressInput">Alamat*</label>
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
																	<a
																		onClick={() => {
																			setStepTwo(!StepTwo);
																			// setStepOne(!StepOne);
																		}}
																		// to="/additionaldata"
																		className="btn btn-primary btn-lg text-white mt-3 w-100"
																	>
																		Next
																	</a>
																</div>
															</div>
														</div>
													) : StepOne && StepTwo && !StepThree ? (
														<div>
															<div className="form-floating mt-3">
																<input
																	className="form-control"
																	id="SalaryInput"
																	placeholder="Salary"
																/>
																<label htmlFor="SalaryInput">Salary*</label>
																<div className="form-floating mt-3">
																	<input
																		className="form-control"
																		id="EmploymentStatusInput"
																		placeholder="Employment Status"
																	/>
																	<label htmlFor="EmploymentStatusInput">
																		Employment Status*
																	</label>
																</div>
																{/* <div className="form-floating mt-3">
															<input
																type="date"
																className="form-control"
																id="DOBInput"
																placeholder="DOB"
															/>
															<label htmlFor="DOBInput">
																Tanggal Lahir*
															</label>
														</div> */}
																<div className="form-floating mt-3">
																	<input
																		className="form-control"
																		id="WorkingPeriodInput"
																		placeholder="Working Priod"
																	/>
																	<label htmlFor="WorkingPeriodInput">
																		Working Priod*
																	</label>
																</div>
																{/* <div className="d-flex mt-3">
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
																	Phone Numbersdsds
																</label>
															</div>
														</div> */}
																<div>
																	<a
																		onClick={() => {
																			// setStepTwo(!StepTwo);
																			setStepthree(!StepThree);
																		}}
																		// to="/additionaldata"
																		className="btn btn-primary btn-lg text-white mt-3 w-100"
																	>
																		Next
																	</a>
																</div>
															</div>
														</div>
													) : (
														<div>
															<Link to="/dashboard" className="btn btn-lg btn-danger text-white d-block mt-2">
																Go to Dashboard
															</Link>
														</div>
													)}
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

export default AdditionalData;
