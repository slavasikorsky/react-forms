import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import { Home, FormikForm, FormikYup, ReactHookForms } from "../pages";

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
			{
				path: "/formik-yup",
				element: <FormikYup />,
			},
			{
				path: "/react-hook-forms",
				element: <ReactHookForms />,
			},
		],
	},
]);

export default router;
