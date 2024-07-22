import { useState } from "react";
import "./registerAuction.css";

const RegisterAuction = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		address: "",
		phone: "",
		email: "",
		identityCard: "",
		auctionName: "",
		dateTime: "",
		venue: "",
		assets: "",
		expectedPrice: "",
		deposit: "",
		gender: "",
		termsAccepted: false,
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const validateForm = () => {
		let formErrors = {};
		if (!formData.fullName) formErrors.fullName = "Full Name is required";
		if (!formData.address) formErrors.address = "Address is required";
		if (!formData.phone) formErrors.phone = "Phone is required";
		if (!formData.email) formErrors.email = "Email is required";
		if (!formData.identityCard)
			formErrors.identityCard = "Identity Card is required";
		if (!formData.auctionName)
			formErrors.auctionName = "Auction Name is required";
		if (!formData.dateTime)
			formErrors.dateTime = "Date and Time are required";
		if (!formData.venue) formErrors.venue = "Venue is required";
		if (!formData.assets)
			formErrors.assets = "Participating Assets are required";
		if (!formData.expectedPrice)
			formErrors.expectedPrice = "Expected Price is required";
		if (!formData.deposit)
			formErrors.deposit = "Deposit Amount is required";
		if (!formData.gender) formErrors.gender = "Gender is required";
		if (!formData.termsAccepted)
			formErrors.termsAccepted = "You must accept the terms";

		setErrors(formErrors);
		return Object.keys(formErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			console.log("Form data is valid:", formData);
			// Gửi dữ liệu đến máy chủ nếu cần
		}
	};

	return (
		<section className="registerAuction">
			<div className="registerAuction_swapper">
				<h2>Form register for auction</h2>
				<form onSubmit={handleSubmit}>
					<div className="registerAuction_content">
						<div className="registerAuction_right">
							{[
								{ name: "fullName", label: "Full Name" },
								{ name: "address", label: "Address" },
								{ name: "phone", label: "Phone" },
								{ name: "email", label: "Email" },
								{
									name: "identityCard",
									label: "Identity Card",
								},
								{ name: "auctionName", label: "Auction Name" },
								{ name: "dateTime", label: "Date and Time" },
								{ name: "venue", label: "Venue" },
								{
									name: "assets",
									label: "Participating Assets",
								},
								{
									name: "expectedPrice",
									label: "Price Expected to Pay",
								},
								{ name: "deposit", label: "Deposit Amount" },
							].map((field) => (
								<div className="input_wrapper" key={field.name}>
									<label>
										{field.label}
										<span>(*)</span>:
									</label>
									<input
										type="text"
										name={field.name}
										value={formData[field.name]}
										onChange={handleChange}
									/>
									<p
										className={`err ${
											errors[field.name] ? "showErr" : ""
										}`}
									>
										{errors[field.name]}
									</p>
								</div>
							))}
						</div>
						<div className="registerAuction_left">
							<div className="registerAuction_gender_option">
								<p>
									Gender <span>(*)</span>
								</p>
								<div className="registerAuction_gender_swapper">
									{["Male", "Female", "Other"].map(
										(gender) => (
											<label key={gender}>
												<input
													type="radio"
													name="gender"
													value={gender}
													checked={
														formData.gender ===
														gender
													}
													onChange={handleChange}
												/>
												{gender}
											</label>
										)
									)}
								</div>
							</div>
						</div>
					</div>
					<div className="registerAuction_confirm">
						<input
							type="checkbox"
							name="termsAccepted"
							checked={formData.termsAccepted}
							onChange={handleChange}
						/>
						<label>
							Commit to carefully reading and understanding the
							Auction Regulations, Commit to accepting the auction
							results, Commit to fully fulfilling payment
							obligations according to regulations.
						</label>
						{errors.termsAccepted && (
							<p className="err">{errors.termsAccepted}</p>
						)}
					</div>
					<div className="registerAuction_btn">
						<button type="submit">Register for Auction</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default RegisterAuction;
