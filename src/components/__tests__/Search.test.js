const {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
} = require("@testing-library/react");
import { Body } from "../Body";
import "@testing-library/jest-dom";
import MOCK_RESLIST from "../mocks/resListMockData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          cards: [
            {},
            {},
            {},
            {},
            {
              card: {
                card: {
                  gridElements: {
                    infoWithStyle: {
                      restaurants: MOCK_RESLIST,
                    },
                  },
                },
              },
            },
          ],
        },
      }),
  })
);

describe("Search", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });
  it("should load search button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const searchButton = screen.getByRole("button", { name: "Search" });
    expect(searchButton).toBeInTheDocument();
  });

  it("should load 8 cards before search", async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
    const restaurants = await screen.findAllByTestId("restaurant-card");
    expect(restaurants).toHaveLength(8);
  });

  it("should update the restaurant lists on clicking Search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const searchButton = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByPlaceholderText("search");
    fireEvent.change(searchInput, { target: { value: "pizza" } });
    fireEvent.click(searchButton);
    // const restaurants =  screen.getAllByTestId("restaurant-card")  //this throws error when restaurant list has length 0 because it can't see any div on the page with the given test id

    const restaurants = screen.queryAllByTestId("restaurant-card"); //returns [] instead of null when no restaurant found on search
    expect(restaurants).toHaveLength(1);
  });

  it("should filter the restaurants list to top-rated restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const restaurants = await screen.findAllByTestId("restaurant-card");
    expect(restaurants).toHaveLength(8);

    const topRatingFilterButton = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    expect(topRatingFilterButton).toBeInTheDocument();

    fireEvent.click(topRatingFilterButton);

    const filteredRestaurants = await screen.findAllByTestId("restaurant-card");
    expect(filteredRestaurants).toHaveLength(3);
  });

  // afterAll(()=>
  // {
  //   console.log("After all")
  // })

  // afterEach(()=>
  // {
  //   console.log("After Each")
  // })
});
