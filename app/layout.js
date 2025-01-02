import { SideBar } from "./components/SideBar";
import "./globals.css";

export const metadata = {
	title: "Restaurant Table Booking",
	description: "Restaurant Table Booking",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`antialiased`}>
				<div className="flex">
					<div className="z-10">
						<SideBar />
					</div>
					<div className="flex-1 ml-14 lg:ml-48">{children}</div>
				</div>
			</body>
		</html>
	);
}
