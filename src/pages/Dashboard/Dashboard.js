import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import jwtDecode from "jwt-decode";

function Dashboard() {
	const { state } = useLocation();
	var jwt = sessionStorage.getItem("jwt");
	const navigate = useNavigate();
	useEffect(() => {
		CheckRegistration();
	}, []);

	const CheckRegistration = async () => {
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
						if (data.step < 3) {
							navigate("/additionaldata");
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
											<h5>Welcome to OK KTA App</h5>
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

export default Dashboard;
