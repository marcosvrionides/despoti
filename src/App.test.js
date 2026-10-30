import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("shows the artist's name and a booking link", () => {
	render(<App />);
	expect(
		screen.getByRole("heading", { level: 1, name: /stefanos\s*despoti/i })
	).toBeInTheDocument();
	expect(screen.getByRole("link", { name: /book stefanos/i })).toHaveAttribute(
		"href",
		expect.stringContaining("mailto:despotistefanos@gmail.com")
	);
});

test("menu button toggles the links", () => {
	render(<App />);
	const menu = screen.getByRole("button", { name: /toggle links menu/i });
	expect(menu).toHaveAttribute("aria-expanded", "false");
	fireEvent.click(menu);
	expect(menu).toHaveAttribute("aria-expanded", "true");
});
