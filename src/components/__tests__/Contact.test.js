import { render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should render Contact Us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("Contact Us");
  expect(heading).toBeInTheDocument();
});
