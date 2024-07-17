import {
    createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Error from "./pages/Error/Error";
import Projects from "./pages/Projects/Projects";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <App />,
                index: true,
            },
            {
                path: "/portfolio",
                element: <App />,
            },
            {
                path: "/portfolio/projects",
                element: <Projects />,
            },
            {
                path: "/portfolio/contact",
                element: <Contact />,
            },
            {
                path: "/portfolio/about",
                element: <About />,
            },
            {
                path: "*",
                element: <Error />,
            }
        ],
        errorElement: <Error />,
    }
]);

export default router;
