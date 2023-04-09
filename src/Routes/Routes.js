import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Media from "../Pages/Media/Media";
import Message from "../Pages/Message/Message";
import Notification from "../Pages/Notification/Notification";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/message',
                element: <Message></Message>
            },
            {
                path: '/notification',
                element: <Notification></Notification>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])