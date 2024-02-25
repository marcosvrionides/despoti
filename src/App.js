import "./App.css";
import React, { useEffect } from "react";
import NameLinks from "./NameLinks/NameLinks.js";
import PicBio from "./PicBio/PicBio.js";
import Content from "./Content/Content.js";
import profilePic from "./PicBio/profilePic.jpg";

function App() {
	useEffect(() => {
		document.title = "Stefanos Despoti";
	}, []);
	return (
		<div className="App">
			<img src={profilePic} className="profilePicMain" />
			<NameLinks />
			<PicBio />
			<Content />
		</div>
	);
}

export default App;
