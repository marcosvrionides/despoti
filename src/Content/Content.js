import React from "react";
import "./Content.css";

function Content() {
	return (
		<div className="contentContainer">
			<section id="listen">
				<h2 className="sectionHeading">Listen</h2>
				<iframe
					className="spotify"
					src="https://open.spotify.com/embed/artist/2YXmgxNhQZTruajG4jKKZu"
					title="Stefanos Despoti on Spotify"
					loading="lazy"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				></iframe>
			</section>
		</div>
	);
}

export default Content;
