import React from "react";
import "./NameLinks.css";
import { RiInstagramLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

function NameLinks() {
	return (
		<div className="NameLinksContainer">
			<text className="Name">Stefanos Despoti</text>
			<div className="Links">
				<a href="#" className="Link">
					<RiInstagramLine />
					<text>Instagram</text>
				</a>
				<a href="#" className="Link">
					<MdOutlineEmail />
					<text>Email</text>
				</a>
			</div>
		</div>
	);
}

export default NameLinks;
