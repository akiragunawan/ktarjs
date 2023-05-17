import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import optImg from "../../assets/otp.png";
import { useLocation, useNavigate } from "react-router-dom";

function Otp() {
	const { state } = useLocation();
	const navigate = useNavigate();
	const [Phone, setPhone] = useState(state?.Phone);
	const [Email, setEmail] = useState(state?.Email);

	// var phone = location.state.phone;
	const [otp, setOtp] = useState("");
	const [minutes, setMinutes] = useState(2);
	const [seconds, setSeconds] = useState(0);

	// console.log(Phone, Email);

	const [digits, setDigits] = useState(["", "", "", "", "", ""]);

	const inputRefs = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
	];

	/* ****************************************** Handling Submit OTP ******************************************* */

	const submitOtp = (otpString) => {
		console.log(otpString);
		{
			/* TODO:: HIT API FOR OTP VERIFICATION */
		}
	};

	/* ****************************************** End Submit OTP ******************************************* */
	/* ******************************************  Combining OTP ******************************************* */
	useEffect(() => {
		const otpString = digits.join(""); // Concatenate digits into a single string

		if (otpString.length == 6) {
			// submitOtp(otpString);
			navigate("/Dashboard", { state: { Phone: Phone, Email: Email } });
		}
	}, [digits]);
	/* ****************************************** End Combining OTP ******************************************* */
	/* ****************************************** Handling Focus ******************************************* */
	const handleInputChange = (index, value) => {
		const newDigits = [...digits];
		newDigits[index] = value;
		setDigits(newDigits);

		if (value.length === 1 && index < inputRefs.length - 1) {
			inputRefs[index + 1].current.focus();
		}
	};
	// const handleChange = (e) => {
	// 	const { maxLength, value, name } = e.target;
	// 	const [fieldName, fieldIndex] = name.split("-");
	//     submitOtp()
	// 	let fieldIntIndex = parseInt(fieldIndex, 10);

	// 	// Check if no of char in field == maxlength
	// 	if (value.length >= maxLength) {
	// 		// It should not be last input field
	// 		if (fieldIntIndex <= 7) {
	// 			// Get the next input field using it's name
	// 			const nextfield = document.querySelector(
	// 				`input[name=field-${fieldIntIndex + 1}]`
	// 			);
	// 			setOtp(otp + e.target.value);
	// 			console.log(otp);

	// 			// If found, focus the next field
	// 			if (nextfield !== null) {
	// 				nextfield.focus();
	//                 setOtp(otp + e.target.value);
	// 			console.log(otp);
	// 			}
	// 		}
	// 	}
	// };

	/* ****************************************** End Handling Focus ******************************************* */

	/* ************************************************* Timer Counting ****************************************************** */
	useEffect(() => {
		const interval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}

			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(interval);
				} else {
					setSeconds(59);
					setMinutes(minutes - 1);
				}
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [seconds]);

	const resendOTP = () => {
		setMinutes(1);
		setSeconds(30);
	};
	/* **************************************************** End Timer Counter ***************************************************** */
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
											src={optImg}
											alt="login form"
											className="img-fluid ms-5"
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
															OTP
														</span>
													</div>
													<div className="text-muted mt-3">
														{Email == "" && Phone
															? "We send you a code to your Phone Number +62 " +
															  Phone
															: "We send you a code to your Email " + Email}
													</div>
												</div>
												<div className="d-flex justify-content-evenly">
													{digits.map((digit, index) => (
														<input
															className="form-control"
															placeholder="_"
															style={{
																width: "40px",
																textAlign: "center",
															}}
															key={index}
															type="text"
															maxLength="1"
															value={digit}
															onChange={(e) =>
																handleInputChange(index, e.target.value)
															}
															ref={inputRefs[index]}
														/>
													))}
												</div>

												<div className="text-center mt-3 text-muted">
													{seconds > 0 || minutes > 0 ? (
														<p style={{ marginBottom: "10px" }}>
															Time Remaining:{" "}
															{minutes < 10 ? `0${minutes}` : minutes}:
															{seconds < 10 ? `0${seconds}` : seconds}
														</p>
													) : (
														<p>Didn't recieve code?</p>
													)}

													<a
														className="fw-bold text-decoration-none"
														disabled={seconds > 0 || minutes > 0}
														style={{
															color:
																seconds > 0 || minutes > 0
																	? "#DFE3E8"
																	: "#FF5630",
															cursor:
																seconds > 0 || minutes > 0
																	? "not-allowed"
																	: "pointer",
														}}
														onClick={resendOTP}
													>
														Resend OTP
													</a>
												</div>
												<div className="mt-4 small text-center">
													<a href="#!" className="small text-muted">
														Terms of use.
													</a>
													<a href="#!" className="small text-muted">
														Privacy policy
													</a>
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
export default Otp;
