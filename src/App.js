import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Resturant from "./components/Restaurant";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import About from "./components/ABout";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Resturant />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },

  // {
  //   path: "*",
  //   element: <Error />,
  // },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route index path="/" element={<AppLayout />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="*" element={<Error />} />
//     </Route>
//   )
// );

// Render => React Element => HTML Element
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
