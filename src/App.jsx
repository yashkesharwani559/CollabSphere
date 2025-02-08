import { createBrowserRouter, RouterProvider } from "react-router";
import { AppLayout } from "./component/layout/AppLayout";
import { SignUp } from "./pages/SignUp";
import { Index } from "./pages/Index";


const App = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout />,
      children : [
        {
          path : "/",
          element : <Index />,
        },
        {
          path : "/signup",
          element : <SignUp />,
        }
      ]
    },
  ]);



  return (
    <RouterProvider router={router} />
  );
}

export default App;