import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Status } from "./pages/Status";
import { Default } from "./layouts/Default"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default/>,
        children: [
            {
                path: '/',
                element: <Timeline />
            },

            {
                path: '/status',
                element: <Status />
            },

            {
                path: '/explore',
                element: <div><h1>There is nothing in here</h1> <h5>There's nothing here, I swear</h5></div>
            },

            {
                path: '/notifications',
                element: <div><h1>There is nothing in here</h1> <h5>There's nothing here, I swear</h5></div>
            },

            {
                path: '/messages',
                element: <div><h1>There is nothing in here</h1> <h5>There's nothing here, I swear</h5></div>
            },

            {
                path: '/bookmarks',
                element: <div><h1>There is nothing in here</h1> <h5>There's nothing here, I swear</h5></div>
            },

            {
                path: '/lists',
                element: <div><h1>There is nothing in here</h1> <h5>There's nothing here, I swear</h5></div>
            },

            {
                path: '/profile',
                element: <div><h1>There is nothing in here</h1> <a href="https://www.youtube.com/watch?v=GBIIQ0kP15E" target="_blank"><h5>There's nothing here, I swear</h5></a> <h6>There is something better in front</h6></div>
            },

            {
                path: '/more',
                element: <div><h1>There is nothing in here</h1> <a href="https://youtu.be/zY5nYmTUfnQ" target="_blank"><h5>There's nothing here, I swear</h5></a> <h6>That's much better!</h6></div>
            }
        ],
    },


])