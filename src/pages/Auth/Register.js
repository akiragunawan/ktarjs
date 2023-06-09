import { Link, Navigate, useNavigate } from "react-router-dom";
import registerpic from "../../assets/register.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Register() {
	const [PhoneNumber, setPhoneNumber] = useState();

	const navigate = useNavigate();

	useEffect(() => {
		// if (sessionStorage.getItem("otp") === "true") {
		// 	navigate("/otp", { state: { Phone: PhoneNumber } });
		// }

		// if (
		// 	sessionStorage.getItem("phone") === "null" ||
		// 	sessionStorage.getItem("phone") === "undefined"
		// ) {
		// 	console.log("masuk");
		// 	// navigate("/otp");
		// 	sessionStorage.setItem("otp", "false");
		// } else {
		// 	sessionStorage.setItem("otp", "true");
		// }

		if (sessionStorage.getItem("otp") === "true") {
			navigate("/otp");
		}
	}, []);

	const NextOTPButton = (e) => {
		e.preventDefault();
		if (!PhoneNumber) {
			Swal.fire({
				title: "Error",
				text: "Phone Number cant be Empty",
				icon: "error",
				confirmButtonText: "I Understand",
				confirmButtonColor: '#ff7954',
			});
		} else {
			sessionStorage.setItem("otp", "true");
			sessionStorage.setItem("phone", PhoneNumber);
			navigate("/otp", { state: { Phone: PhoneNumber } });
		}
	};

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
								<div className="row g-0">
									<div className="col-md-6 col-lg-5 d-none d-md-block mt-auto mb-auto">
										<img
											src={registerpic}
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
															Create New Account
														</span>
													</div>
												</div>
												<div className="d-flex ">
													<div
														className="my-auto fw-bold pt-3 pe-3 ps-2 bg-secondary rounded text-light me-1"
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
															onChange={(e) => setPhoneNumber(e.target.value)}
															required
														/>
														<label htmlFor="floatingPhoneNumber">
															Phone Number
														</label>
													</div>{" "}
												</div>

												<div className="pt-1 mb-4 mt-3">
													{/* <Link
														to={"/otp"}
														state={{ Phone: PhoneNumber }}
														className="btn btn-primary btn-lg w-100"
														style={{
															// backgroundColor: "#ff7954",
															color: "white",
															border: "none",
														}}
													>
														Next
													</Link> */}
													<a
														className="btn btn-primary btn-lg w-100"
														style={{
															// backgroundColor: "#ff7954",
															color: "white",
															border: "none",
														}}
														onClick={(e) => {
															NextOTPButton(e);
														}}
													>
														Next
													</a>
												</div>

												{/* <p
													className="mb-5 pb-lg-2"
													style={{ color: "#393f81" }}
												>
													Already have an Account?{" "}
													<Link to={"/Login"} style={{ color: "#393f81" }}>
														Sign In here
													</Link>
												</p> */}
												<a href="#!" className="small text-muted">
													Terms of use.
												</a>
												<a href="#!" className="small text-muted">
													Privacy policy
												</a>
											</form>

											<p
												className="text-muted mt-3"
												style={{ fontSize: "0.7rem" }}
											>
												*Untuk pengajuan KTA Hanya bisa di lakukan di daerah
												Jabodetabek
											</p>
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

export default Register;
