import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import jwtDecode from "jwt-decode";

function Dashboard() {
	const { state } = useLocation();


	

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
