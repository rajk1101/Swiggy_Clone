import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
// import Grocery from "./components/Grocery.js";



const Grocery=lazy(()=>import("./components/Grocery.js"))
const About=lazy(()=>import("./components/About.js"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header  name={"rajkamal"}/>
      <Outlet />
    </div>
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
        element:<Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>
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
        path:"restaurant/:resId",
        element:<RestaurantMenu/>
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
