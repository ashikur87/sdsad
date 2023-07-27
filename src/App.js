import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Orders from "./Components/Orders/Orders";
import Home from "./Components/Home/Home";
import GrandPa from "./Components/Family/GrandPa/GrandPa";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("tshirt.json");
          },
          element: <Home></Home>,
        },

        {
          path: "/orders",
          element: <Orders></Orders>,
        },
        {
          path: "/grand",
          element: <GrandPa></GrandPa>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
