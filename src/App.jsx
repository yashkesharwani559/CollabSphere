import { createBrowserRouter, RouterProvider } from "react-router";
import { AppLayout } from "./component/layout/AppLayout";
import { SignUp, signUpData } from "./pages/SignUp";
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
          action : signUpData,
        }
      ]
    },
  ]);



  return (
    <RouterProvider router={router} />
  );
}

export default App;