import { getAllByTestId, getByTestId, render } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../../store/Store";
import { StaticRouter } from "react-router-dom/server";
import Header from "../Header";
test("Logo should load on rendering the header", () => {
  const header = render(
    <StaticRouter>
    <Provider store={Store}>
      <Header />
    </Provider>
    </StaticRouter>
  );
  const test=header.getAllByTestId("logo")
  expect(test[0].src).toBe("https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg")

});
