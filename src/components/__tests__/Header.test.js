import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import appStore from "src/utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

/** @jest-environment node */

const TestComponent = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
};
describe("Header", () => {
  it("should render Header component with login button", () => {
    render(<TestComponent />);
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
  });
  it("should change login button to logout on click", () => {
    render(<TestComponent />);
    const loginButton = screen.getByRole("button");
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button");
    expect(logoutButton).toBeInTheDocument();
  });
});
