import "./App.css";
import React, { useEffect } from "react";
import NameLinks from "./NameLinks/NameLinks.js";
import PicBio from "./PicBio/PicBio.js";
import Content from "./Content/Content.js";
import Contact from "./Contact/Contact.js";
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyCPelseeDCHIKW_4g6PDPnSAwlbMe9OAVk",
	authDomain: "despotis-ca7ff.firebaseapp.com",
	projectId: "despotis-ca7ff",
	storageBucket: "despotis-ca7ff.appspot.com",
	messagingSenderId: "1044662469631",
	appId: "1:1044662469631:web:fa4c8233784531d5fdddca",
	measurementId: "G-4WSEGHHMC1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
	useEffect(() => {
		// Analytics throws in browsers that block its storage, which must not take the page down
		isSupported()
			.then((supported) => {
				if (supported) {
					logEvent(getAnalytics(app), "page_visit");
				}
			})
			.catch(() => {});
	}, []);
	return (
		<div className="App">
			<NameLinks />
			<main>
				<PicBio />
				<Content />
			</main>
			<Contact />
		</div>
	);
}

export default App;
