import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
	Home,
	Cards,
	Spemd,
	Save,
	Budget,
	Borrow,
	Business,
	Press,
	Workable,
	About,
	Help,
	FAQs,
	Security,
	ContactUs,
	Login,
	GetKuda,
} from "./pages";

const App = () => {
	return (
		<div>
			<div>
				<BrowserRouter>
					<Routes>
						<Route index element={<Home />} />

						{/* Features SubPages */}
						<Route path="cards" element={<Cards />} />
						<Route path="spend" element={<Spemd />} />
						<Route path="save" element={<Save />} />
						<Route path="budget" element={<Budget />} />
						<Route path="borrow" element={<Borrow />} />

						{/* Business Page */}
						<Route path="business" element={<Business />} />
						<Route path="press" element={<Press />} />
						<Route path="workable" element={<Workable />} />
						<Route path="about" element={<About />} />

						{/* Help SubPages */}
						<Route path="help" element={<Help />} />
						<Route path="faqs" element={<FAQs />} />
						<Route path="security" element={<Security />} />
						<Route path="contact" element={<ContactUs />} />

						{/* Register / Login */}
						<Route path="login" element={<Login />} />
						<Route path="getKuda" element={<GetKuda />} />

						{/* NotFound page redirect to home page */}
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
};

export default App;
