import React from "react";
import "./PicBio.css";
import profilePic from "./profilePic.jpg";

function PicBio() {
	return (
		<div>
			<img src={profilePic} />
			<text>
				I'm Stefanos, your go-to musician for unforgettable live
				performances. With soulful melodies and versatile tunes, I'll
				elevate your ambiance and leave your guests captivated. Let's
				create magical moments together.
			</text>
		</div>
	);
}

export default PicBio;
