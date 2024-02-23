import "./index.css"
import "./css/App.css"

import { RouterProvider } from "react-router-dom"
import { router } from "./Route"


export default function App() {

  return (
  <RouterProvider router={router}/>
  )
}
