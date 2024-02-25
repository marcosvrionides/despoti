import React from "react";
import "./PicBio.css";
import profilePic from "./profilePic.jpg";

function PicBio() {
	return (
		<div className="picBioContainer">
			<img src={profilePic} className="profilePic" />
			<p className="bio">
				I'm Stefanos, your go-to musician for unforgettable live
				performances. By playing the guitar and singing soulful
				melodies, I'll elevate your ambiance and leave your guests
				captivated. Let's create magical moments together.
			</p>
		</div>
	);
}

export default PicBio;
