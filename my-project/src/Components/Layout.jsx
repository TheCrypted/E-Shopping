import {Header} from "./Header.jsx";
import {CssBaseline} from "@mui/material";
import {Sidebar} from "./Sidebar.jsx";
import {Outlet} from "react-router-dom";

export function Layout() {
	return (
		<>
			<CssBaseline />
			<Header />
			<div className="h-[92%] w-full flex overflow-hidden">
				<Sidebar />
				<div className="h-full w-3/4 overflow-x-auto">
					<Outlet />
				</div>
			</div>
		</>
	)
}