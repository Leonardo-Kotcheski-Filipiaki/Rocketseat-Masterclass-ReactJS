import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import "../css/Default.css"
export function Default() {
    return (
    <div className="layout">
        <Sidebar/>
        <div className="content">
          <Outlet></Outlet>
                      
        </div>
    </div>
    )
}