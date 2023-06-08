import {Header} from "./Header.jsx";
import {CssBaseline} from "@mui/material";
import {Sidebar} from "./Sidebar.jsx";
import {Outlet} from "react-router-dom";
import {ErrorBoundary} from "../Pages/ErrorBoundary.jsx";

export function Layout() {
	return (
		<>
			<CssBaseline />
			<Header />
			<div className="h-[92%] w-full flex overflow-hidden">
				<ErrorBoundary>
					<Outlet />
				</ErrorBoundary>
			</div>
		</>
	)
}