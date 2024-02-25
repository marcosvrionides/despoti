import React, { useState, useEffect } from "react";
import "./Content.css";

function Content() {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="videosContainer">
			<iframe
				width={
					windowSize.width > 1250 ? "1200" : windowSize.width * 0.9
				}
				height="630"
				src="https://www.youtube.com/embed/5E3g9iqapSI?si=1MbOloNN6nZ6MkHp"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
}

export default Content;
