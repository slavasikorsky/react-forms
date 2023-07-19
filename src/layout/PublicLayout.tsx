import { Outlet } from "react-router-dom";

const PublicLayout = () => {
	return (
		<>
			<div>Header</div>
			<Outlet />
		</>
	);
};

export default PublicLayout;
