import { createBrowserRouter } from "react-router-dom";
import UserRoot from "../layout/UserRoot";
import Home from "../pages/Users/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserRoot></UserRoot>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        }
    ]
  },
    
]);

export default router;