import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";
import LoginPage from "./components/LoginPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { UserContext } from "./utils/UserContext";
import Cart from "./components/Cart";
// import "../sass/main.css";
import { Provider } from "react-redux";
import { lazy, Suspense, useContext, useState } from "react";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("Preetu");
  const { loggedInUser } = useContext(UserContext);

  //   useEffect(()=>
  // {
  //Mock API Call
  //   const data  = {
  //     name : "Vaishno Devi"
  //   }
  //   setUserName(data.name)
  // })

  //******************** Value prop is important in ContextProvider ***************************

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="min-h-screen w-full">
          <UserContext.Provider
            value={{ loggedInUser: "Amit Shah", setUserName }}
          >
            <Header />
          </UserContext.Provider>
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const reactRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "about",
        element: (
          <Suspense
            fallback={<h1>Sorry You Will Have To Hold Your Horses!</h1>}
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Please hold on for few seconds!</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const App = () => {
  return (
    <div className="bg-amber-200">
      <h1>Hello World</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={reactRouter} />);
