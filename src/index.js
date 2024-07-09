import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
// import Grocery from "./components/Grocery.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";



const Grocery = lazy(() => import("./components/Grocery.js"))
const About = lazy(() => import("./components/About.js"))

const AppLayout = () => {
  const [username, setUsername] = useState();
  useEffect(() => {
    let data = {
      name: ""
    }
    setUsername(data.name)
  }, [])
  return (
    <Provider store={appStore}>

      <UserContext.Provider value={{ loggedInuser: username, setUsername }}>

        <div className="app">
          <Header name={"rajkamal"} />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }

    ],
    errorElement: <Error />
  },

]);

/*

const heading = React.createElement("h1", { id: "heading" }, "Namaste");

// using jsx
const JsxHeading = () => <h1 id="heading">Namaste React using JSX 🚀 </h1>;

const elem = <span id="heading"> Hello React Element</span>;

const HeadingComponent = () => {
  return (
    <div id="container">
      

      <h1 className="heading">{console.log("hello123")}hello Ashu!</h1>
    </div>
  );
};

const title = (
  <h1>
    "hello"<span> </span>
    {elem}
    {heading}
    <HeadingComponent />
  </h1>
);

console.log(heading);
// console.log( jsxHeading)
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
