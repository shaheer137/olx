import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
} from "react-router-dom"

import Products from "../views/Products";
import Details from "../views/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/products/:id",
                element: <Details />,
            }
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    const navigate = useNavigate()

    return <div>

        <center>
            <button className="butt" onClick={() => navigate('/products')}>Products</button>
        </center>
        <br/>

        <Outlet />


    </div>
}

export default Router
