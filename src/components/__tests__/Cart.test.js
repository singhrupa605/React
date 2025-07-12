import { act, fireEvent, render, screen, within } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/ResMenuMock.json";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "src/utils/appStore";
import "@testing-library/jest-dom";
import Cart from "../Cart";
import Header from "../Header";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
        </BrowserRouter>
      </Provider>
    )
  );

  const accordionHeader = await screen.findByText("New Pizzas");
  expect(accordionHeader).toBeInTheDocument();

  fireEvent.click(accordionHeader);

  const addButtons = await screen.findAllByRole("button", { name: "Add +" });
  expect(addButtons).toHaveLength(6);

  const cartDataBeforeAdd = await screen.findByText("Cart🛒(0)");
  expect(cartDataBeforeAdd).toBeInTheDocument();

  fireEvent.click(addButtons[0]);
  fireEvent.click(addButtons[1]);

  const cartDataAfterAdding = await screen.findByText("Cart🛒(2)");
  expect(cartDataAfterAdding).toBeInTheDocument();
});

it("should load 2 cards in the cart component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  );

  // const accordionHeader = await screen.findByText("New Pizzas");
  // fireEvent.click(accordionHeader);
  // const addButtons = await screen.findAllByRole("button", { name: "Add +" });
  // fireEvent.click(addButtons[0]);
  // fireEvent.click(addButtons[1]);

  const cartItemsParentDiv = await screen.findByTestId("cart-items-parent");
  const cartItems = await within(cartItemsParentDiv).findAllByTestId(
    "cart-items"
  );
  expect(cartItems).toHaveLength(2);
});
