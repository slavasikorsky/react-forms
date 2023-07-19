import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

const PublicLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default PublicLayout;
