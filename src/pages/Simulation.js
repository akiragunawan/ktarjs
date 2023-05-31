import { motion } from "framer-motion";
import ojk from "../assets/logoojkblack.png";
import lps from "../assets/logo-lps-black.png";
import { useEffect, useRef, useState } from "react";

export default function Simulation() {
	// const [Duration, setDuration] = useState(3);
	// const [LoanAmount, setLoanAmount] = useState();
	// const [Outstanding, setOutstanding] = useState(0);

	var Duration = useRef();
	var LoanAmount = useRef();
	const [Outstanding, setOutstanding] = useState(0);

	const calculateSim = (e) => {
		e.preventDefault();
		console.log(Duration.current.value, LoanAmount.current.value);
		setOutstanding(
			LoanAmount.current.value * (1 / Duration.current.value + 1.89 / 100)
		);
		// Outstanding.current = LoanAmount.current.value * (1 / Duration.current.value + 1.89 / 100);
		// console.log(Outstanding.current);
	};

	const reqLoan = (e) => {
		e.preventDefault();
		
	};

	// useEffect(() => {
	// 	console.log(Outstanding);
	// }, [Outstanding]);

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
											<div className="mt-5 ms-5">
												<a className="fs-4 text-uppercase bg-primary m-auto text-light text-start fw-bolder p-2 text-decoration-none">
													Simulation
												</a>
												<div className="font-monospace mt-1">
													Simulate your monthly installments
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-7 d-flex flex-column">
											<div className="card-body p-4 p-lg-5 text-black">
												<form onSubmit={calculateSim}>
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
																KTA Simulation
															</span>
														</div>
													</div>
													<div className="d-flex flex-column">
														<div className="form-floating w-100">
															<input
																type="number"
																className="form-control"
																id="FloatingLoanAmount"
																placeholder="Loan Amount"
																ref={LoanAmount}
																// onChange={(e) => setLoanAmount(e.target.value)}
																// value={LoanAmount}
																required
															/>
															<label htmlFor="FloatingLoanAmount">
																Loan Amount
															</label>
														</div>
														<div className="form-floating w-100 mt-3">
															<select
																className="form-select"
																id="FloatingLoanDuration"
																ref={Duration}
																// onChange={(e) => {
																// 	setDuration(e.target.value);
																// }}
															>
																{/* <option>.::Loan Duration::.</option> */}
																<option value="3">3 Month</option>
																<option value="6">6 Month</option>
																<option value="12">12 Month</option>
																<option value="24">24 Month</option>
																<option value="36">36 Month</option>
															</select>
															<label htmlFor="FloatingLoanDuration">
																Loan Amount
															</label>
														</div>
													</div>

													<div className="pt-1 mb-4 mt-3">
														<button
															type="submit"
															// to={"/otp"}
															// state={{ Phone: PhoneNumber }}
															className="btn btn-primary btn-lg w-100"
															style={{
																// backgroundColor: "#ff7954",
																color: "white",
																border: "none",
															}}
															// onClick={calculateSim}
														>
															Calculate
														</button>
													</div>
													<div className="text-center mb-5 d-flex flex-column">
														<h5> Cicilan Per Bulan</h5>
														<span
															style={{
																letterSpacing: "1px",
																backgroundColor: "#ff7954",
																color: "white",
															}}
															className="my-auto pb-2 p-1 fw-bold fs-4 border rounded-3"
														>
															Rp.
															{new Intl.NumberFormat().format(
																Outstanding.toFixed()
															)}
														</span>
														{Outstanding !== 0 ? (
															<div className="mt-3">
																<a
																	className="btn btn-danger btn-md w-50 rounded-5"
																	onClick={reqLoan}
																>
																	Request Loan
																</a>
															</div>
														) : (
															""
														)}
														<div className="d-block d-sm-block d-md-flex justify-content-start my-3">
															<img className="my-auto" src={ojk} />
															<img className="ms-3 my-auto" src={lps} />
															<div
																className="text-start my-auto ms-2 fw-bold font-monospace mt-2"
																style={{
																	fontSize: "9.2px",
																	lineHeight: ".75rem",
																}}
															>
																PT Bank Oke Indonesia Tbk terdaftar dan diawasi
																oleh Otoritas Jasa Keuangan dan peserta penjamin
																LPS.
															</div>
														</div>
														<span
															className="font-monospace text-muted me-auto"
															style={{ fontSize: "12px" }}
														>
															*terms and Conditions apply
														</span>
													</div>

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
