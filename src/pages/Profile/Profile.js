import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
	var name = sessionStorage.getItem("name");
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
				"Accept": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "*",
				"Access-Control-Allow-Credentials": "true",
				"Authorization": `Bearer ${jwt}`,
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
						if(data.step <3){
							navigate('/additionaldata')
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
		<motion.div
			initial={{ x: "-100vw" }}
			animate={{ x: 0 }}
			exit={{ x: "100vw" }}
			transition={{ duration: 0.2, origin: 1 }}
		>
			<div></div>
		</motion.div>
	);
}
export default Profile;
