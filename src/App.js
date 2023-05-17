import Navbar from "./Navbar";
import Simulation from "./pages/Simulation";
import Home from "./pages/Home";
import Submission from "./pages/Submission";
import Login from "./pages/Auth/Login";
import Otp from "./pages/Auth/Otp";
import Register from "./pages/Auth/Register";
import PersonalInformation from "./pages/Auth/PersonalInformation";
import AdditionalData from "./pages/Auth/AdditionalData";
import Dashboard from "./pages/Dashboard/Dashboard";

import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();

	return (
		<div style={{ backgroundColor: "#F8F8F8" }}>
			<Navbar />
			<div className="container">
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<Home />} />
						<Route path="/simulation" element={<Simulation />} />
						<Route path="/Submission" element={<Submission />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/otp" element={<Otp />} />
						<Route path="/pinfor" element={<PersonalInformation />} />
						<Route path="/additionaldata" element={<AdditionalData />} />
						<Route path="/Dashboard" element={<Dashboard />} />
					</Routes>
				</AnimatePresence>
			</div>
		</div>
	);
}

export default App;
