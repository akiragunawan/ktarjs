import loginpic from "../../assets/bg22.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "react-bootstrap";

import jwtDecode from "jwt-decode";
function Login() {
	const Email = useRef();
	const Password = useRef();
	// const [PhoneNumber, setPhoneNumber] = useState();
	const [Show, setShow] = useState(false);
	const [TermsChecked, setTermsChecked] = useState(false);
	const [EmailError, setEmailError] = useState(false);
	const [PasswordError, setPasswordError] = useState(false);
	const [TokenExp, setTokenExp] = useState(false);

	var PhoneNumber;

	// sessionStorage.setItem("Terms", "");
	const navigate = useNavigate();
	useEffect(() => {
		var termsses = sessionStorage.getItem("Terms");
		if (termsses === false) {
			setShow(true);
		} else if (termsses === "" || termsses === null) {
			setShow(true);
		}
	}, []);

	const setTerm = () => {
		setTermsChecked(!TermsChecked);
	};
	const handleTermsClick = () => {
		if (TermsChecked) {
			setShow(false);
			sessionStorage.setItem("Terms", true);
		} else {
			alert("Please Check The box about consest you have read the Terms");
		}
	};

	useEffect(() => {
		if (sessionStorage.getItem("jwt")) {
			console.log("ada");
			navigate("/");
		} else {
		}
	}, []);

	const tryLogin = async (em, ph, pass) => {
		setEmailError(false);
		setPasswordError(false);
		var data;
		if (em) {
			data = { email: em, password: pass };
		} else {
			data = { phone_num: ph, password: pass };
		}
		await fetch(process.env.REACT_APP_SERVER + "/api/v1/auth/login", {
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
				// "Authorization":
				// 	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE2ODUwMDgxMjMsImV4cCI6MTY4NTA5NDUyMywibmJmIjoxNjg1MDA4MTIzLCJqdGkiOiJmUncwNnJSVDA5a0hXU0VQIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Ee_vG_iep7dwipDpQgXKCnbQ9Ok7PZHPqRfOPcWoRI4",
				// // "Content-Type": "application/json",
			},
			// redirect: "follow",
			// referrerPolicy: "no-referrer",
			body: new URLSearchParams(data),
		}).then((response) => {
			response
				.json()
				.then((data) => {
					if (response.status == 200) {
						if (data.access_token) {
							sessionStorage.setItem("jwt", data.access_token);

							navigate("/dashboard");
							setEmailError(false);
							setPasswordError(false);
						}
					} else {
						setEmailError(true);
						setPasswordError(true);
					}

					// var decode = jwtDecode(data.access_token);
					// var exp_date = new Date(decode.exp *1000);
				})
				.catch((err) => {
					console.log(err);
				});
		});

		// .then((response) => response.text());

		// console.log(response);
		// if (!Email || !Password) {
		// 	console.log(response.json());
		// }
	};

	const FormValidation = (e) => {
		e.preventDefault();
		// navigate("/otp", { state: { Phone: Phone, Email: Email } });
		// console.log('a')
		let EmailValue = Email.current.value;
		let PasswordValue = Password.current.value;
		if (
			EmailValue.includes("@") ||
			EmailValue.includes(".") ||
			EmailValue.includes("08")
		) {
			setEmailError(false);
			setPasswordError(false);
			if (EmailValue.includes("@") || EmailValue.includes(".")) {
				setEmailError(false);
				setPasswordError(false);
				PhoneNumber = null;
				tryLogin(EmailValue, "", PasswordValue);	
			} else if (EmailValue.includes("08")) {
				setEmailError(false);
				PhoneNumber = EmailValue;
				tryLogin("", PhoneNumber, PasswordValue);
			} else {
				setEmailError(true);
			}
		} else {
			setEmailError(true);
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
											src={loginpic}
											alt="login form"
											className="img-fluid "
											style={{ borderRadius: "1rem 0 0 1rem" }}
										/>
									</div>
									<div className="col-md-6 col-lg-7 d-flex align-items-center">
										<div className="card-body p-4 p-lg-5 text-black">
											<form onSubmit={FormValidation}>
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
															Sign into your account
														</span>
													</div>
												</div>

												{/* <div className="d-flex my-3 justify-content-evenly">
													<div>
														<a
															className={
																IndexSignIn === 0
																	? "Active text-primary text-decoration-none border p-2"
																	: "text-decoration-none text-muted"
															}
															onClick={(e) => setIndexSignIn(0)}
														>
															Sign In With Email
														</a>
													</div>
													<div>
														<a
															className={
																IndexSignIn === 1
																	? "Active text-primary text-decoration-none border p-2"
																	: "text-decoration-none text-muted"
															}
															onClick={(e) => setIndexSignIn(1)}
														>
															Sign In With Phone
														</a>
													</div>
												</div> */}

												{/* {IndexSignIn === 0 ? ( */}
												<div className="form-floating mb-3">
													<input
														type="text"
														className="form-control"
														id="floatingEmailInput"
														placeholder="name@example.com"
														ref={Email}
														// onChange={(e) => setEmail(e.target.value)}
														required
													/>
													<label htmlFor="floatingEmailInput">
														Phone Number / Email address
													</label>
													<div
														className={
															EmailError ? "text-danger fw-bold" : "d-none"
														}
													>
														Wrong Email or Phone Number
													</div>
												</div>

												<div className="form-floating mb-3">
													<input
														type="password"
														className="form-control"
														id="floatingPasswordInput"
														placeholder="Password"
														ref={Password}
														// onChange={(e) => setPassword(e.target.value)}
														required
													/>
													<label htmlFor="floatingPasswordInput">
														Password
													</label>
													<div
														className={
															PasswordError ? "text-danger fw-bold" : "d-none"
														}
													>
														Wrong Password
													</div>
												</div>
												{/* ) : ( */}
												{/* <motion.div
														initial={{ x: "-100vw" }}
														animate={{ x: 0 }}
														exit={{ x: "100vw" }}
														transition={{ duration: 0.2, origin: 1 }}
														className="form-floating mb-3"
													>
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
																	onChange={(e) => setPhone(e.target.value)}
																	required
																/>
																<label htmlFor="floatingPhoneNumber">
																	Phone Number
																</label>
															</div>{" "}
														</div>
													</motion.div> */}
												{/* )} */}

												<div className="pt-1 mb-4 mt-3">
													<button
														// onClick={tryLogin}
														type="submit"
														className="btn btn-primary btn-lg w-100"
														style={{
															// backgroundColor: "#ff7954",
															color: "white",
															border: "none",
														}}
													>
														Login
													</button>
												</div>

												{/* <p
													className="mb-5 pb-lg-2"
													style={{ color: "#393f81" }}
												>
													Don't have an account?{" "}
													<Link to={"/Register"} style={{ color: "#393f81" }}>
														Register Here
													</Link>
												</p> */}
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
			<Modal
				show={Show}
				onHide={() => setShow(false)}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header>
					<Modal.Title>Terms and Agreements</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet
					et magna non dignissim. Maecenas id libero non leo congue laoreet in
					nec lacus. Donec hendrerit nisi sem, vitae commodo dui cursus ac.
					Integer ac nibh tincidunt, aliquam lacus et, tincidunt magna. Proin
					dictum tortor congue lectus maximus dictum. Nullam blandit felis non
					leo tincidunt malesuada euismod a risus. Phasellus sed quam imperdiet,
					dapibus mauris sed, auctor leo. Vivamus scelerisque viverra fringilla.
					In ornare in eros nec molestie. Donec sagittis ipsum ac congue varius.
					Vestibulum sed dignissim orci, ut pulvinar est. Proin id justo libero.
					In non faucibus sapien, vitae hendrerit enim. Vestibulum ante ipsum
					primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed
					sit amet turpis congue, semper erat nec, pulvinar lacus. Etiam in
					volutpat libero. Phasellus placerat, sem id laoreet consequat, quam
					nisl posuere arcu, vel mollis nunc nulla non nunc. Quisque feugiat
					urna tellus, et consequat risus facilisis in. Curabitur lacus elit,
					placerat sed vehicula in, sodales dictum erat. Mauris malesuada sit
					amet nunc in pulvinar. Fusce lacinia nec tortor non congue. Sed ac
					velit ac libero placerat maximus. Sed finibus iaculis aliquet. Morbi
					rhoncus eu eros at porta. Curabitur eros nisl, consectetur ut
					malesuada quis, semper nec felis. Sed eget lorem placerat, facilisis
					magna vitae, efficitur mi. Duis sollicitudin feugiat lorem, non
					fringilla enim. In ac condimentum elit, ut sodales urna. Nulla ac
					lorem est. Nullam vestibulum non neque et viverra. In pharetra, ligula
					ut ullamcorper dapibus, dolor eros fermentum nisi, id vehicula justo
					nisl non neque. Praesent pellentesque dui porta urna malesuada
					maximus. Sed ex tortor, fringilla sit amet erat ut, posuere feugiat
					turpis. Aenean in ex metus. Fusce ultricies gravida dui vitae
					lobortis. Nam in tincidunt augue, quis auctor tellus. Aenean fringilla
					viverra blandit. Phasellus at neque vitae est aliquet pulvinar. Morbi
					tempor quam ex, at eleifend metus placerat at. Vestibulum cursus
					pretium eros sit amet ultricies. Aenean pharetra nisi in purus
					ultricies congue. Suspendisse sed orci enim. Donec non purus ante.
					Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
					posuere cubilia curae; Sed convallis urna mi, ut accumsan leo commodo
					in. Suspendisse diam augue, efficitur et bibendum eleifend,
					condimentum at risus. Duis nec dolor ut massa aliquam euismod. Ut
					hendrerit dolor a dui vulputate rhoncus. Nunc massa ex, tempus tempor
					nunc quis, pretium eleifend nisi. Praesent non fermentum arcu, et
					pharetra ipsum. Aliquam ut maximus mauris, id blandit nisi. Integer
					vehicula hendrerit viverra. Integer fermentum porta euismod. Curabitur
					iaculis convallis nisi, et condimentum velit feugiat non. Phasellus
					rutrum nulla malesuada, tempor nulla eget, bibendum diam. Morbi leo
					justo, dignissim ac varius pulvinar, auctor eget dolor. Sed urna sem,
					elementum et auctor nec, ultricies vitae purus. Ut lorem nisl,
					suscipit a tortor non, porta molestie mauris. Aenean vulputate risus
					ultricies fermentum ultricies. Phasellus volutpat quam quis
					condimentum imperdiet. Suspendisse a tincidunt urna. Aenean dapibus
					imperdiet erat, euismod tempus massa dapibus non. Maecenas porta
					ligula in turpis molestie, quis semper neque semper. Fusce
					pellentesque ex laoreet, tincidunt risus ac, pharetra sapien. Proin
					consequat maximus dapibus. Integer fringilla sodales purus. Donec
					convallis urna eget urna condimentum tempor. Phasellus eu risus ut
					tellus scelerisque fringilla. Maecenas at imperdiet libero, ut posuere
					augue. In pretium et leo nec pulvinar. Cras non lacinia augue.
					Phasellus ullamcorper enim ligula, et porta elit vulputate ut. Proin
					id arcu dignissim, accumsan velit in, eleifend elit. Praesent rhoncus
					nibh est. Vestibulum consequat nibh eget mollis aliquam. Nulla
					porttitor tempor facilisis. Nunc quis tortor mi. Nullam commodo sed
					tellus at suscipit. Aliquam vel dolor nulla. Curabitur malesuada augue
					volutpat, semper dui sit amet, porttitor elit. Nunc non augue a tortor
					condimentum pulvinar et ut turpis. Quisque ultrices nunc eget libero
					gravida, in consectetur quam egestas. Suspendisse consectetur, urna
					quis dapibus bibendum, lorem quam vulputate velit, et auctor mi justo
					et lectus. Curabitur sit amet magna eleifend, ullamcorper nisi et,
					euismod mi. In a lacus sit amet est suscipit tempus. Curabitur tellus
					dolor, semper quis sapien at, ornare vehicula urna. Maecenas
					malesuada, nulla ut posuere malesuada, mi eros volutpat ex, nec
					fermentum nibh neque sagittis felis. Sed ut risus et ex bibendum
					scelerisque in et lorem. Aenean fringilla interdum elit ut porta. Nunc
					in massa odio. Nullam egestas elementum posuere. Maecenas rhoncus,
					purus a blandit facilisis, lacus quam condimentum magna, quis
					convallis erat sapien vel odio. Mauris nec erat vel ligula mattis
					scelerisque. Mauris lectus velit, gravida ac erat auctor, tincidunt
					lobortis metus. Morbi diam velit, ultricies sed iaculis quis,
					vulputate ut leo. Vestibulum ac diam consectetur, posuere elit quis,
					venenatis lacus. Vestibulum congue fermentum risus, eu sagittis tellus
					consectetur ut. Nulla viverra scelerisque placerat. In accumsan est
					luctus, cursus lectus vitae, tincidunt mauris. In mollis et mauris
					quis luctus. Aliquam vestibulum sem odio, sed malesuada lacus
					ultricies eget. Nam egestas ultrices fermentum. Sed ultricies nulla
					non urna fringilla euismod. Maecenas commodo est sed tortor dignissim
					volutpat. Nullam vitae diam ante. Fusce quis massa non risus aliquam
					viverra. Etiam vitae odio orci. Pellentesque ut quam dapibus, sagittis
					nisl eget, ultrices sapien. Curabitur porta rhoncus mauris ut
					fermentum. Aenean et justo lorem. Phasellus quis diam et turpis
					vehicula blandit. Duis gravida purus vel eros ornare commodo. Sed
					vehicula tellus nec ex mattis faucibus. In rutrum pellentesque sapien
					nec condimentum. Vestibulum eu arcu vulputate, pharetra mauris in,
					dignissim sem. Curabitur imperdiet dapibus mauris ac finibus. Vivamus
					tincidunt dictum vestibulum. Nam vitae lacus eu quam luctus ultricies.
					Duis in nunc gravida, scelerisque lectus eu, maximus elit. Suspendisse
					potenti. Nulla vestibulum leo sit amet tellus euismod, sed tempor
					neque tempor. Donec interdum eros ut orci dictum blandit. Maecenas
					eleifend hendrerit pharetra. Nullam odio turpis, pulvinar sed lorem
					eget, semper volutpat justo. Donec ac ultrices turpis. Duis maximus
					sed eros non tincidunt. Nunc tempus dictum purus, fermentum placerat
					lectus iaculis a. Proin convallis luctus convallis. Etiam pretium eros
					vitae risus malesuada sollicitudin. Vivamus interdum sem nec turpis
					posuere faucibus sodales eu turpis. Vestibulum sed facilisis leo,
					ultrices rhoncus ante. Integer dictum dolor est, eget consequat ante
					elementum in. Fusce tempus dui ut felis placerat suscipit. Aenean
					magna nulla, ultricies ut ligula id, tincidunt imperdiet metus. Proin
					accumsan, quam in sagittis hendrerit, lacus quam gravida erat, sed
					tristique quam lorem eu risus. Vivamus posuere tortor quis condimentum
					ornare. Fusce ultrices ante tempus pretium vestibulum. Nunc et tellus
					a eros ullamcorper faucibus. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Morbi lorem felis, gravida a mauris eget, pretium
					tincidunt urna. Integer vitae orci massa. Donec ligula lorem, pretium
					a fermentum quis, mattis id turpis. Etiam varius pharetra dolor ut
					aliquam. Maecenas in scelerisque purus, id venenatis velit. Sed
					finibus posuere felis in venenatis. Suspendisse at dignissim ex.
					Quisque nulla ipsum, maximus facilisis felis vitae, porttitor
					facilisis nulla. Etiam id purus non neque rutrum blandit. Nam
					imperdiet ex sed ex luctus, vitae consectetur augue tincidunt. Donec
					at finibus sapien. Nunc auctor lorem at consectetur condimentum.
					Maecenas facilisis sollicitudin feugiat. Aenean eleifend consequat
					finibus. Duis ultricies risus ac scelerisque accumsan. Vivamus maximus
					dolor et orci laoreet, sed fermentum tellus aliquam. Phasellus tempus
					posuere libero ac auctor. Duis fermentum nisl dolor, sit amet rhoncus
					massa convallis id. Proin commodo lectus quis nibh fermentum mollis.
					Phasellus interdum urna at urna bibendum posuere. Sed sed fermentum
					turpis. Praesent purus sem, ultricies sit amet dapibus sed,
					ullamcorper vel diam. Etiam consectetur neque vitae porta dapibus. Nam
					sodales nunc eu tortor lacinia, ac viverra orci auctor. Nullam et
					mollis mauris. Integer nec lectus ornare, sollicitudin sem vel,
					vestibulum ante. Sed pretium finibus lectus nec egestas. Nullam sapien
					nunc, lacinia nec mollis ut, sollicitudin sit amet nunc. In bibendum
					ante sodales, fermentum ipsum vitae, rutrum nunc. Fusce eget accumsan
					ante, sed tempus ante. Nam finibus imperdiet massa et pretium. Aliquam
					viverra mauris sit amet lectus bibendum varius. Morbi et turpis a
					dolor congue sollicitudin et eu dui. Phasellus varius eu magna et
					pulvinar. Sed mollis, dolor tincidunt dictum finibus, nulla quam
					scelerisque enim, vitae maximus arcu metus eget orci. Morbi ut erat
					nisl. Nunc vitae mi eu lorem porttitor lacinia. Nam mattis posuere
					risus, at tincidunt urna auctor id. Vivamus sit amet sem et sem
					blandit hendrerit id sit amet nibh. Praesent condimentum malesuada
					posuere. Integer tincidunt dignissim quam at auctor. Suspendisse
					potenti. Mauris dignissim velit at pharetra consectetur. Aenean eros
					est, pellentesque nec mi eget, lobortis vehicula lacus. Nam faucibus,
					arcu at consectetur vehicula, nibh leo accumsan tortor, ut laoreet
					ligula lacus id eros. Nunc id quam eget nisi imperdiet pellentesque.
					Vivamus cursus purus nec dignissim semper. Praesent lacinia sed felis
					sit amet cursus. Aliquam consequat lectus arcu, non ullamcorper enim
					tempus ut. Vivamus gravida eu dui nec consectetur. Integer in ex
					purus. Mauris justo libero, facilisis eget mauris dignissim,
					pellentesque dictum mi. Donec sagittis ligula lacus, eu venenatis orci
					aliquam nec. Maecenas mollis vitae tellus non cursus. Curabitur
					euismod elit a elit dictum, nec faucibus risus rhoncus. Vestibulum in
					mollis lectus, id porttitor ligula. Duis vel nisl efficitur, semper
					justo in, elementum nulla. Morbi sed ligula pulvinar, interdum massa
					sit amet, cursus risus. Praesent sed convallis quam. Pellentesque
					faucibus, augue sed varius imperdiet, augue nunc feugiat nunc, non
					pellentesque nisl risus ut massa. Ut vitae velit at libero volutpat
					suscipit vitae nec sapien. Etiam laoreet est et augue semper aliquet.
					Morbi laoreet venenatis porta. Sed luctus urna magna, nec lobortis
					purus porta eu. Fusce congue, massa a consectetur congue, mi enim
					dictum ipsum, sit amet ullamcorper urna felis eu neque. Phasellus quis
					velit molestie, fermentum quam quis, congue augue. Donec id ipsum mi.
					Etiam sit amet sollicitudin erat. Vestibulum ante ipsum primis in
					faucibus orci luctus et ultrices posuere cubilia curae; Donec nec
					commodo magna. Donec lobortis ultricies lacus eget ultrices. Vivamus
					quam felis, feugiat at consequat quis, porta et orci. Nunc at faucibus
					est. Suspendisse molestie libero dolor, a aliquam nibh faucibus nec.
					In faucibus risus ut est accumsan, et condimentum nulla dapibus. Nulla
					blandit dictum mi, efficitur consequat mauris tincidunt in. Donec id
					dolor efficitur, sollicitudin tortor id, tincidunt est. Phasellus
					mattis in sem eget aliquam. Suspendisse id nunc sit amet felis auctor
					finibus. Pellentesque tristique pulvinar urna et finibus. Aliquam erat
					volutpat. Nulla gravida augue faucibus, rutrum elit vel, condimentum
					velit. Mauris imperdiet metus ante, ut auctor eros porttitor quis.
					Aliquam hendrerit volutpat mi non molestie. Duis tristique mauris
					nisi, nec euismod mi interdum non. Nullam vulputate vulputate metus ut
					semper. Sed convallis orci sed turpis malesuada elementum. Donec
					imperdiet sapien in enim dictum, vitae mattis ligula facilisis. Donec
					rhoncus urna quis justo elementum mollis. Nulla condimentum bibendum
					tortor, sed tincidunt quam.
				</Modal.Body>
				<Modal.Footer>
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							value=""
							id="flexCheckIndeterminate"
							onChange={setTerm}
						/>
						<label
							className="form-check-label"
							htmlFor="flexCheckIndeterminate"
						>
							I have Read the Terms
						</label>
					</div>
					<button
						className="text-white btn btn-primary"
						onClick={handleTermsClick}
						variant="primary"
					>
						Understood
					</button>
				</Modal.Footer>
			</Modal>
		</motion.div>
	);
}

export default Login;
