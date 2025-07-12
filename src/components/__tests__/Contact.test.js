import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us", ()=>
{
test("Should render Contact Us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Should load Submit Button", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Submit");
});

it("Button Text Should be Submit", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("Should load two input boxed", () => {
  render(<Contact />);
  const inputs = screen.getAllByTestId("input")
  console.log(inputs.length)
  expect(inputs).toHaveLength(2)
 // expect(inputs.length).toBe(2)
});
}
)
