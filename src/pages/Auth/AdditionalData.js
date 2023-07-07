import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import sucess1 from "../../assets/success1.png";
function AdditionalData() {
	const { state } = useLocation();
	const [PhoneNumber, setPhoneNumber] = useState(state?.Phone);

	const [StepOne] = useState(true);
	const [StepTwo, setStepTwo] = useState(false);
	const [StepThree, setStepthree] = useState(false);
	const [ErrorMsg, setErrorMsg] = useState(false);
	const [ErrorText, setErrorText] = useState("");
	const [NikCheck, setNikCheck] = useState(false);
	const [LoadingScreen, setLoadingScreen] = useState(false);

	const [NIK, setNIK] = useState("");
	const [Name, setName] = useState("");
	const [BOD, setBOD] = useState("");
	const [Address, setAddress] = useState("");
	const [Salary, setSalary] = useState("");
	const [EmploymentStatus, setEmploymentStatus] = useState("");
	const [WorkingPeriod, setWorkingPeriod] = useState("");
	const [Dom, setDom] = useState("");
	// const [AvalData, setAvailData] = useState(false);

	var jwt = sessionStorage.getItem("jwt");

	useEffect(() => {
		// cekStep();
		// if (!PhoneNumber) {
		// 	cekPhonenumber();
		// }
	}, []);

	const cekPhonenumber = async () => {
		await fetch(process.env.REACT_APP_SERVER + "/api/v1/auth/me", {
			method: "GET",
			// mode: "cors",
			// cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Accept: "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "*",
				"Access-Control-Allow-Credentials": "true",
				Authorization: `Bearer ${jwt}`,
				// // "Content-Type": "application/json",
			},

			// body: new URLSearchParams(data),
		}).then((response) => {
			response
				.json()
				.then((data) => {
					if (response.status == 200) {
						console.log(data);
						setNIK(data.nik);
						setBOD(data.dob);
						setName(data.name);
						setAddress(data.address);
						setPhoneNumber(data.phone_num);
						setSalary(data.salary);
						setDom(data.dom);
						setWorkingPeriod(data.work_period);
						setEmploymentStatus(data.emp_status);
						// console.log(data.address)
					} else {
						console.log(data);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		});
	};

	const cekStep = async () => {
		await fetch(process.env.REACT_APP_SERVER + "/api/v1/auth/user/step", {
			method: "GET",
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
				// "Content-Type": "application/json",
			},
			// redirect: "follow",
			// referrerPolicy: "no-referrer",
			// body: new URLSearchParams(data),
		}).then((response) => {
			response
				.json()
				.then((data) => {
					if (response.status == 200) {
						if (data.step === 1) {
							setStepTwo(false);
							setStepthree(false);
							console.log(data.step);
						} else if (data.step === 2) {
							setStepTwo(true);
							setNikCheck(true);
							setStepthree(false);
						} else {
							setStepTwo(true);
							setStepthree(true);
							setNikCheck(true);
						}
					} else {
						console.log("tidak ada");
						console.log(data);
					}

					// var decode = jwtDecode(data.access_token);
					// var exp_date = new Date(decode.exp *1000);
				})
				.catch((err) => {
					console.log(err);
				});
		});
	};

	// console.log(NIK.current)
	const firstForm = (e) => {
		e.preventDefault();

		if (!Name || !BOD || !Address) {
			setErrorMsg(true);
			setErrorText("Please fill all the Field");
		} else {
			if (!NikCheck) {
				setErrorMsg(true);
				setErrorText(
					"Please Check Your NIK First Before Continue to next Step"
				);
			} else {
				setErrorMsg(false);
				setStepTwo(true);
				// next1();
			}
		}
	};
	const secondForm = (e) => {
		e.preventDefault();

		if (!Salary || !EmploymentStatus || !WorkingPeriod || !Dom) {
			setErrorMsg(true);
			setErrorText("Please fill all the Field");
		} else {
			if (!NikCheck) {
				setErrorMsg(true);
				setErrorText(
					"Please Check Your NIK First Before Continue to next Step"
				);
			} else {
				setErrorMsg(false);
				setStepthree(true);
				// next2();
			}
		}
	};

	const checkNIK = async () => {
		setLoadingScreen(true);

		setNikCheck(true);

		setLoadingScreen(false);
		console.log(NikCheck);
		// var data = { nik: NIK, num: "081282435498" };
		// await fetch(process.env.REACT_APP_SERVER + "/api/v1/auth/user/existing", {
		// 	method: "POST",
		// 	// mode: "cors",
		// 	// cache: "no-cache",
		// 	credentials: "same-origin",
		// 	headers: {
		// 		"Content-Type": "application/x-www-form-urlencoded",
		// 		Accept: "application/json",
		// 		"Access-Control-Allow-Origin": "*",
		// 		"Access-Control-Allow-Headers": "*",
		// 		"Access-Control-Allow-Credentials": "true",
		// 		Authorization: `Bearer ${jwt}`,
		// 		// // "Content-Type": "application/json",
		// 	},

		// 	body: new URLSearchParams(data),
		// }).then((response) => {
		// 	response
		// 		.json()
		// 		.then((data) => {
		// 			if (response.status == 200) {
		// 				console.log(data);
		// 				console.log("data ada");
		// 				setLoadingScreen(false);
		// 				navigate("/dashboard");
		// 			} else {
		// 				setLoadingScreen(false);
		// 				console.log("data kosong");
		// 				setNikCheck(true);
		// 			}
		// 		})
		// 		.catch((err) => {
		// 			console.log(err);
		// 		});
		// });
	};

	const next1 = async () => {
		// if (NikCheck) {
		// console.log("masuk");
		var data = { nik: NIK, name: Name, dob: BOD, address: Address };
		await fetch(process.env.REACT_APP_SERVER + "/api/v1/auth/user/complete", {
			method: "POST",
			// mode: "cors",
			// cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Accept: "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "*",
				"Access-Control-Allow-Credentials": "true",
				Authorization: `Bearer ${jwt}`,
				// // "Content-Type": "application/json",
			},

			body: new URLSearchParams(data),
		}).then((response) => {
			response
				.json()
				.then((data) => {
					if (response.status == 200) {
						console.log(data);
						fetch(
							process.env.REACT_APP_SERVER + "/api/v1/auth/user/step/next",
							{
								method: "POST",
								// mode: "cors",
								// cache: "no-cache",
								credentials: "same-origin",
								headers: {
									"Content-Type": "application/x-www-form-urlencoded",
									Accept: "application/json",
									"Access-Control-Allow-Origin": "*",
									"Access-Control-Allow-Headers": "*",
									"Access-Control-Allow-Credentials": "true",
									Authorization: `Bearer ${jwt}`,
									// // "Content-Type": "application/json",
								},

								// body: new URLSearchParams(data),
							}
						).then((response) => {
							response
								.json()
								.then((data) => {
									if (response.status == 200) {
										sessionStorage.setItem("name", Name);
										window.location.reload();
									} else {
										console.log(data);
									}
								})
								.catch((err) => {
									console.log(err);
								});
						});
					} else {
						console.log(data);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		});
		// }else{
		// 	console.log("tidak masuk");
		// }
	};
	const next2 = async () => {
		// if (NikCheck) {
		// console.log("masuk");
		var data = {
			salary: Salary,
			emp_status: EmploymentStatus,
			work_period: WorkingPeriod,
			dom: Dom,
		};
		await fetch(process.env.REACT_APP_SERVER + "/api/v1/auth/user/complete", {
			method: "POST",
			// mode: "cors",
			// cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Accept: "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "*",
				"Access-Control-Allow-Credentials": "true",
				Authorization: `Bearer ${jwt}`,
				// // "Content-Type": "application/json",
			},

			body: new URLSearchParams(data),
		}).then((response) => {
			response
				.json()
				.then((data) => {
					if (response.status == 200) {
						console.log(data);
						fetch(
							process.env.REACT_APP_SERVER + "/api/v1/auth/user/step/next",
							{
								method: "POST",
								// mode: "cors",
								// cache: "no-cache",
								credentials: "same-origin",
								headers: {
									"Content-Type": "application/x-www-form-urlencoded",
									Accept: "application/json",
									"Access-Control-Allow-Origin": "*",
									"Access-Control-Allow-Headers": "*",
									"Access-Control-Allow-Credentials": "true",
									Authorization: `Bearer ${jwt}`,
									// // "Content-Type": "application/json",
								},

								// body: new URLSearchParams(data),
							}
						).then((response) => {
							response
								.json()
								.then((data) => {
									if (response.status == 200) {
										console.log(data);
										setStepthree(true);
									} else {
										console.log(data);
									}
								})
								.catch((err) => {
									console.log(err);
								});
						});
					} else {
						console.log(data);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		});
		// }else{
		// 	console.log("tidak masuk");
		// }
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
							{ErrorMsg ? (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 100, y: 0 }}
									exit={{ opacity: 0, y: 10 }}
									transition={{ duration: 0.2 }}
									className="alert alert-danger"
									role="alert"
								>
									{ErrorText}
								</motion.div>
							) : (
								""
							)}
							<div className="card shadow" style={{ borderRadius: "1rem" }}>
								<div className="mt-5 me-auto ms-5 d-flex">
									<div className="my-auto">
										{StepOne && !StepTwo && !StepThree ? (
											""
										) : StepOne && StepTwo && !StepThree ? (
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
										) : (
											<></>
										)}
									</div>
									<div>
										{StepOne && !StepTwo && !StepThree ? (
											""
										) : StepOne && StepTwo && !StepThree ? (
											<a
												className="text-decoration-none text-primary"
												onClick={() => {
													setStepTwo(!StepTwo);
												}}
											>
												Back
											</a>
										) : (
											<></>
										)}
									</div>
								</div>
								{/* Proggress bar */}
								<div className="mt-3 mb-3 px-5 pt-3">
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
																	type="number"
																	className="form-control"
																	id="NIKInput"
																	placeholder="NIK"
																	onChange={(e) => {
																		setNIK(e.target.value);
																	}}
																	value={NIK}
																/>
																<label htmlFor="NIKInput">NIK*</label>
															</div>

															<div className="form-floating mt-3">
																<input
																	type="text"
																	className="form-control"
																	id="NameInput"
																	placeholder="Nama"
																	onChange={(e) => {
																		setName(e.target.value);
																	}}
																	value={Name}
																/>
																<label htmlFor="NameInput">
																	Nama (Sesuai KTP)
																</label>
															</div>
															<div>
																<a
																	onClick={() => {
																		checkNIK();
																	}}
																	className="btn btn-md btn-primary w-100 text-light mt-2"
																>
																	Check NIK
																</a>
															</div>
															<div className="form-floating mt-3">
																<input
																	type="date"
																	className="form-control"
																	id="DOBInput"
																	placeholder="DOB"
																	onChange={(e) => {
																		setBOD(e.target.value);
																	}}
																	value={BOD}
																/>
																<label htmlFor="DOBInput">Tanggal Lahir*</label>
															</div>
															<div className="form-floating mt-3">
																<input
																	type="text"
																	className="form-control"
																	id="AddressInput"
																	placeholder="Alamat"
																	onChange={(e) => {
																		setAddress(e.target.value);
																	}}
																	value={Address}
																/>
																<label htmlFor="AddressInput">
																	Alamat (Sesuai KTP)*
																</label>
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
																	onClick={(e) => {
																		firstForm(e);
																		// setStepOne(!StepOne);
																	}}
																	// to="/additionaldata"
																	className="btn btn-primary btn-lg text-white mt-3 w-100"
																>
																	Next
																</a>
															</div>
														</div>
													) : StepOne && StepTwo && !StepThree ? (
														<div>
															<div className="form-floating mt-3">
																<input
																	className="form-control"
																	id="SalaryInput"
																	placeholder="Salary"
																	onChange={(e) => {
																		setSalary(e.target.value);
																	}}
																	value={Salary}
																/>
																<label htmlFor="SalaryInput">Salary*</label>
																<div className="form-floating mt-3">
																	<input
																		className="form-control"
																		id="EmploymentStatusInput"
																		placeholder="Employment Status"
																		onChange={(e) => {
																			setEmploymentStatus(e.target.value);
																		}}
																	/>
																	<label htmlFor="EmploymentStatusInput">
																		Employment Status*
																	</label>
																</div>

																<div className="form-floating mt-3">
																	<input
																		className="form-control"
																		id="WorkingPeriodInput"
																		placeholder="Working Priod"
																		onChange={(e) => {
																			setWorkingPeriod(e.target.value);
																		}}
																	/>
																	<label htmlFor="WorkingPeriodInput">
																		Working Period*
																	</label>
																</div>

																<div className="card mt-3">
																	<div className="card-body">
																		<div
																			className="Card-title text-muted"
																			style={{ fontSize: "0.8rem" }}
																		>
																			Domicile Data
																		</div>
																		<div className="card-text">
																			<div className="form-floating mt-3">
																				<input
																					className="form-control"
																					id="DomInput"
																					placeholder="Domicile Address"
																					onChange={(e) => {
																						setDom(e.target.value);
																					}}
																				/>
																				<label htmlFor="DomInput">
																					Domicile Address
																				</label>
																			</div>
																		</div>
																	</div>
																</div>

																<div>
																	<a
																		onClick={(e) => {
																			// setStepTwo(!StepTwo);
																			secondForm(e);
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
															<Link
																to="/loan"
																className="btn btn-lg btn-primary text-white d-block mt-2"
															>
																Peek My Loan Limit! 👻
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
