import { createBrowserRouter } from "react-router-dom";
// import Home_copy from "../views/About";
import Home from "../views/Home.tsx";
const router = createBrowserRouter([{ path: "/", element: <Home /> },{
    path:'/about',
    element:<div>About</div>
}]);

export default router
