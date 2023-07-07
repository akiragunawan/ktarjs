import React from "react";
import reqsent from "../../assets/reqsent.png";

function MessageLoanReqSent() {
	return (
		<div>
			<section className="vh-100">
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col col-xl-10">
							<div className="card shadow" style={{ borderRadius: "1rem" }}>
								<div className="row g-0">
									<div className="col">
										<img
											src={reqsent}
											alt="login form"
											className="img-fluid p-5 "
											style={{ borderRadius: "1rem 0 0 1rem" , width:'300px'}}
										/>
									</div>
									{/* <div className="col-md-6 col-lg-5 d-none d-md-block mt-auto mb-auto">
										<img
											src={reqsent}
											alt="login form"
											className="img-fluid p-5"
											style={{ borderRadius: "1rem 0 0 1rem" }}
										/>
									</div>
									<div className="col-md-6 col-lg-7 d-flex align-items-center">
										<div className="card-body p-4 p-lg-5"></div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default MessageLoanReqSent;
