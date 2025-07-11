const { render , screen} = require("@testing-library/react");
import RestaurantCard from "../RestaurantCard";
import MOCK_RESDATA from "../mocks/ResData.mock.json";
import "@testing-library/jest-dom"
describe("Restaurant Card", () => {
  it("should render Restaurant Card with data", () => {
    render(<RestaurantCard resData={MOCK_RESDATA} />);
    const resTitle = screen.getByText("KFC")
    expect(resTitle).toBeInTheDocument()


  });
});
