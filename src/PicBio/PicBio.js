import React from "react";
import "./PicBio.css";
import profilePic from "./profilePic.jpg";

function PicBio() {
	return (
		<section id="top" className="picBioContainer">
			<div className="picBioText">
				<p className="eyebrow">Guitarist &middot; Live performances</p>
				<h1 className="heroName">
					Stefanos
					<br />
					Despoti
				</h1>
				<p className="bio">
					Stefanos is a skillful musician who transforms ordinary
					moments into extraordinary memories. With his masterful
					guitar skills, he weaves enchanting melodies that resonate
					with hearts and elevate any ambiance. Whether it’s an
					intimate gathering or a grand celebration, Stefanos is your
					go-to musician for unforgettable live performances. Let’s
					create magical moments together!
				</p>
				<div className="heroActions">
					<a
						href="mailto:despotistefanos@gmail.com?subject=Booking%20enquiry"
						className="button buttonPrimary"
					>
						Book Stefanos
					</a>
					<a href="#listen" className="button">
						Listen
					</a>
				</div>
			</div>
			<img
				src={profilePic}
				className="profilePic"
				alt="Stefanos Despoti sitting by his amplifier, holding an electric guitar"
				width="1024"
				height="1457"
			/>
		</section>
	);
}

export default PicBio;
