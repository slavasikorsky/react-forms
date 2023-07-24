import { Formik, FormikErrors } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormHeading } from "../components/FormHeading";

interface FormValues {
	name: string;
	tel: string;
	email: string;
	password: string;
}

export const FormikForm = () => {
	const { t } = useTranslation();
	const [isSubmitting, setIsSubmitting] = useState(false);
	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
				<FormHeading title="Formik" />

				<Formik
					initialValues={{
						name: "",
						email: "",
						tel: "",
						password: "",
					}}
					validate={(values: FormValues) => {
						const errors: FormikErrors<FormValues> = {};
						if (!values.name) {
							errors.name = "Name Required";
						} else if (!values.email) {
							errors.email = "Email Required";
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
								values.email
							)
						) {
							errors.email = "Invalid email address";
						}
						return errors;
					}}
					onSubmit={(values) => {
						setIsSubmitting(true);
						setTimeout(() => {
							console.log(values);
						}, 400);
					}}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
					}) => (
						<form onSubmit={handleSubmit} className="w-full mt-3">
							{isSubmitting && (
								<p className="text-green-400">Sended!</p>
							)}
							<div className="flex flex-col justify-between mb-4">
								<label
									htmlFor="name"
									className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
								>
									{t("fields.firstName")}
									<input
										type="text"
										name="name"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.name}
									/>
								</label>
								<p className="text-sm text-red-400">
									{errors.name && touched.name && errors.name}
								</p>
							</div>
							<div className="flex flex-col justify-between mb-4">
								<label
									htmlFor="tel"
									className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
								>
									{t("fields.phone")}
									<input
										type="tel"
										name="tel"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.tel}
									/>
								</label>
							</div>
							<div className="flex flex-col justify-between mb-4">
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
								>
									{t("fields.email")}
									<input
										type="email"
										name="email"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.email}
									/>
								</label>
								<p className="text-sm text-red-400">
									{errors.email &&
										touched.email &&
										errors.email}
								</p>
							</div>
							<div className="flex flex-col justify-between mb-4">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
								>
									{t("fields.password")}
									<input
										type="password"
										name="password"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.password}
									/>
								</label>
								{errors.password &&
									touched.password &&
									errors.password}
							</div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-25"
								disabled={isSubmitting}
							>
								{t("submit")}
							</button>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
};
