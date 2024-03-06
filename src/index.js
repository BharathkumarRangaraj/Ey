import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from "./Components/Header";
// import Body from "./Components/Body";
// import Footer from "./Components/Footer";

// const routers = createBrowserRouter([
//   {
//     path: "/",
//     element: <Header />,
//     children: [
//       {
//         path: "/body",
//         element: <Body />,
//       },
//       {
//         path: "/footer",
//         element: <Footer />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <RouterProvider router={routers}> */}
    <App />
    {/* </RouterProvider> */}
  </StrictMode>
);
