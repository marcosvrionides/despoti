import React, { useState } from "react";
import "./NameLinks.css";
import { RiInstagramLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { RiSpotifyLine } from "react-icons/ri";

function NameLinks() {
	const [showLinks, setShowLinks] = useState(false);
	const closeLinks = () => setShowLinks(false);

	return (
		<header className="NameLinksContainer">
			<a href="#top" className="Name" onClick={closeLinks}>
				Stefanos Despoti
			</a>
			<button
				type="button"
				className={`LinksMenu ${showLinks ? "open" : ""}`}
				onClick={() => setShowLinks(!showLinks)}
				aria-label="Toggle links menu"
				aria-expanded={showLinks}
				aria-controls="site-links"
			>
				<span className="bar bar1" />
				<span className="bar bar2" />
				<span className="bar bar3" />
			</button>
			<nav
				id="site-links"
				className={`Links ${showLinks ? "open" : ""}`}
				aria-label="Stefanos Despoti's links"
			>
				<a
					href="https://www.instagram.com/despotimusic/"
					className="Link"
					target="_blank"
					rel="noopener noreferrer"
					onClick={closeLinks}
				>
					<RiInstagramLine aria-hidden="true" />
					Instagram
				</a>
				<a
					href="https://open.spotify.com/artist/2YXmgxNhQZTruajG4jKKZu?si=WhCPyaoyR6qsqdIaMFEG3Q"
					className="Link"
					target="_blank"
					rel="noopener noreferrer"
					onClick={closeLinks}
				>
					<RiSpotifyLine aria-hidden="true" />
					Spotify
				</a>
				<a
					href="mailto:despotistefanos@gmail.com"
					className="Link"
					onClick={closeLinks}
				>
					<MdOutlineEmail aria-hidden="true" />
					Email
				</a>
			</nav>
		</header>
	);
}

export default NameLinks;
