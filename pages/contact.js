// React
import { useState } from "react";
// NextJS
import Head from "next/head";
// Stylesheet
import styles from "../styles/Contact.module.scss";

const Contact = () => {
	const [contactInfo, setContactInfo] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setContactInfo((currentInfo) => ({
			...currentInfo,
			[name]: value,
		}));
	};

	// log contact info for now
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(contactInfo);
	};

	return (
		<div id={styles["contact-page"]}>
			<Head>
				<title>Contact | BruinShack</title>
			</Head>
			<h1 id={styles["contact-header"]}>Contact Us</h1>
			<form id={styles["contact-form"]} onSubmit={handleSubmit}>
				<div className={styles["form-field"]}>
					<label className={styles["field-label"]} htmlFor="name">
						Your name
					</label>
					<input
						id="name"
						className={styles["field-input"]}
						name="name"
						type="text"
						placeholder="Joe Bruin"
						value={contactInfo.name}
						onChange={handleChange}
					/>
				</div>
				<div className={styles["form-field"]}>
					<label className={styles["field-label"]} htmlFor="email">
						Your email
					</label>
					<input
						id="email"
						className={styles["field-input"]}
						name="email"
						type="email"
						placeholder="joebruin@gmail.com"
						value={contactInfo.email}
						onChange={handleChange}
					/>
				</div>
				<div className={styles["form-field"]}>
					<label className={styles["field-label"]} htmlFor="message">
						Message
					</label>
					<textarea
						id="message"
						className={`${styles["field-input"]} ${styles["field-textarea"]}`}
						name="message"
						placeholder="Write your message here."
						value={contactInfo.message}
						onChange={handleChange}
					/>
				</div>
				<button id={styles["submit-button"]}>Submit</button>
			</form>
		</div>
	);
};

export default Contact;
