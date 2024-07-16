import {
    createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Error from "./pages/Error/Error";
import Projects from "./pages/Projects/Projects";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Contact from "./pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/" && "/portfolio",
                element: <App />,
            },
            {
                path: "/projects/",
                element: <Projects />
            },
            {
                path: "/contact/",
                element: <Contact />
            }
        ],
        errorElement: <Error />
    }
]);

export default router;