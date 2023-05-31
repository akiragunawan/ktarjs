import { motion } from "framer-motion";
import React from "react";


function Profile() {
	return (
		<motion.div
			initial={{ x: "-100vw" }}
			animate={{ x: 0 }}
			exit={{ x: "100vw" }}
			transition={{ duration: 0.2, origin: 1 }}
		>
			<div>
				
			</div>
		</motion.div>
	);
}
export default Profile;
