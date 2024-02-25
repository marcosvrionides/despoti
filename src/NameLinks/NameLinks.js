import React from "react";
import "./NameLinks.css";
import { RiInstagramLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { RiSpotifyLine } from "react-icons/ri";

function NameLinks() {
	return (
		<div className="NameLinksContainer">
			<p className="Name">Stefanos Despoti</p>
			<div className="Links">
				<a
					href="https://www.instagram.com/stefanos_despoth/"
					className="Link"
					target="_blank"
				>
					<RiInstagramLine />
					<p>Instagram</p>
				</a>
				<a
					href="https://open.spotify.com/artist/2YXmgxNhQZTruajG4jKKZu?si=WhCPyaoyR6qsqdIaMFEG3Q"
					className="Link"
					target="_blank"
				>
					<RiSpotifyLine />
					<p>Spotify</p>
				</a>

				<a
					href="mailto:despotistefanos@gmail.com"
					className="Link"
					target="_blank"
				>
					<MdOutlineEmail />
					<p>Email</p>
				</a>
			</div>
		</div>
	);
}

export default NameLinks;
