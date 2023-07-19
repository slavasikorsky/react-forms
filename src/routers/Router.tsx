import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import { Home, FormikForm } from "../pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <PublicLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/formik",
				element: <FormikForm />,
			},
		],
	},
]);

export default router;
