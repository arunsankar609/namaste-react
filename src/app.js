import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Headert from "./components/Header";

import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contactus";
import ResturantDetails from "./components/ResturantDetails";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Store from "./store/Store";
import Cart from "./components/Cart"
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";


const Instamart = lazy(() => import("./components/Instamart"));

const Appon1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "From Context",
    email: "arunsankar248@gmail.com",
  });
  return (
    <div id="container">
      <Provider store={Store}>
        <userContext.Provider value={{ user: user, setUser: setUser }}>
          <Headert stateLog={isLoggedIn} updateState={setIsLoggedIn} />
          <Outlet />
          <Footer />
        </userContext.Provider>
      </Provider>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Appon1 />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/restaurants/:id",
        element: <ResturantDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
