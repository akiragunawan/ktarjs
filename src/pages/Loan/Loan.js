import React, { useState } from "react";
import winner from "../../assets/winner.png";
import { useNavigate } from "react-router-dom";
function Loan() {
	const navigate = useNavigate();
	// const [Approve, setApprove] = useState(true);
	const [JumahPinjaman, setJumlahPinjaman] = useState(0);
	const [DurasiPinjaman, setDurasiPinjaman] = useState(0);
	const [MaksimalPinjaman, setMaksimalPinjaman] = useState(200000000);
	const [MaksimalDurasi, setMaksimalDurasi] = useState(60);

	const JumlahPinjamanfunc = (e) => {
		setJumlahPinjaman(e.target.value);
	};
	const DurasiPinjamanfunc = (e) => {
		setDurasiPinjaman(e.target.value);
	};
	const MsgPage = () => {
		navigate("/msg");
	};

	return (
		<div>
			{/* //STATUS DI TERIMA BISA PINJAMAN */}
			<section className="vh-100">
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col col-xl-10">
							<div className="card shadow" style={{ borderRadius: "1rem" }}>
								<div className="row g-0">
									<div className="col-md-6 col-lg-5 d-none d-md-block mt-auto mb-auto">
										<img
											src={winner}
											alt="login form"
											className="img-fluid p-5"
											style={{ borderRadius: "1rem 0 0 1rem" }}
										/>
									</div>
									<div className="col-md-6 col-lg-7 d-flex align-items-center">
										<div className="card-body p-4 p-lg-5">
											<div
												className=""
												style={{
													letterSpacing: "1px",
													backgroundColor: "#ff7954",
													color: "white",
												}}
											>
												<h4 className="text-light fw-bold text-uppercase p-1">
													Congratulation!
												</h4>
											</div>
											<div>
												<p className="fs-5">Your Loan Limit is</p>
											</div>
											<div className="bg-secondary bg-opacity-25 rounded-3">
												<p className="fw-bolder fs-3 text-center py-2">
													{"Rp. "}
													{new Intl.NumberFormat().format(
														MaksimalPinjaman.toFixed()
													)}
												</p>
											</div>
											<div>
												<div>
													<h5>Simulasi Pinjaman</h5>
												</div>
												<div>
													<div className="card">
														<div className="card-body">
															<div className="card-text">
																<div>
																	<div className="d-flex justify-content-between">
																		<label
																			htmlFor="JumlahPinjamanHTML"
																			className="form-label"
																		>
																			Loan Total
																		</label>
																		<p className="fw-bold">
																			{"Rp. "}
																			{new Intl.NumberFormat().format(
																				JumahPinjaman
																			)}
																		</p>
																	</div>
																	<input
																		type="range"
																		className="form-range"
																		min={0}
																		max={MaksimalPinjaman}
																		step="1000000"
																		// value={0}
																		id="JumlahPinjamanHTML"
																		onChange={(e) => {
																			JumlahPinjamanfunc(e);
																		}}
																	/>
																</div>
																<div className="d-flex justify-content-between">
																	<div>0</div>
																	<div>
																		{" "}
																		{new Intl.NumberFormat().format(
																			MaksimalPinjaman.toFixed()
																		)}
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="card mt-3">
														<div className="card-body">
															<div className="card-text">
																<div>
																	<div className="d-flex justify-content-between">
																		<label
																			htmlFor="LoanDuration"
																			className="form-label"
																		>
																			Loan Duration
																		</label>
																		<p className="fw-bold">
																			{new Intl.NumberFormat().format(
																				DurasiPinjaman
																			)}
																			{" Bulan"}
																		</p>
																	</div>
																	<input
																		type="range"
																		className="form-range"
																		min={0}
																		max={60}
																		step="6"
																		// value={0}
																		defaultValue={0}
																		id="LoanDuration"
																		onChange={(e) => {
																			DurasiPinjamanfunc(e);
																		}}
																	/>
																</div>
																<div className="d-flex justify-content-between">
																	<div>0 Bulan</div>
																	<div>60 Bulan</div>
																</div>
															</div>
														</div>
													</div>
													<div className="mt-3">
														<a
															className="btn btn-lg
                                                             btn-primary text-light w-100 "
															onClick={() => {
																MsgPage();
															}}
														>
															Request Loan
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Loan;
