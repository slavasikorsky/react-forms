import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { FormHeading } from "../components/FormHeading";
import "react-toastify/dist/ReactToastify.css";

interface IFormInput {
	firstName: string;
	lastName: string;
	age: number;
	email: string;
}

export const ReactHookFormsYup = () => {
	const { t } = useTranslation();

	const validationSchema = yup.object({
		firstName: yup.string().required(t("errors.name")),
		lastName: yup.string().required(t("errors.lastName")),
		age: yup
			.number()
			.typeError(t("errors.age"))
			.min(18, t("errors.ageMore"))
			.max(99, t("errors.ageLess"))
			.required(),
		email: yup.string().email().required(t("errors.email")),
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm<IFormInput>({
		resolver: yupResolver<IFormInput>(validationSchema),
	});
	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		toast.success("Sended!");
		console.log(data);
	};
	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
				<FormHeading title="React Hook Form + Yup" />
				<form onSubmit={handleSubmit(onSubmit)} className="w-full mt-3">
					<div className="flex flex-col justify-between mb-4">
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
						>
							{t("fields.firstName")}
							<input
								type="text"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								{...register("firstName")}
							/>
						</label>
						<p className="text-sm text-red-400">
							{errors.firstName?.message}
						</p>
					</div>
					<div className="flex flex-col justify-between mb-4">
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
						>
							{t("fields.lastName")}
							<input
								type="text"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								{...register("lastName")}
							/>
						</label>
						<p className="text-sm text-red-400">
							{errors.lastName?.message}
						</p>
					</div>
					<div className="flex flex-col justify-between mb-4">
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
						>
							{t("fields.age")}
							<input
								type="number"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								{...register("age")}
							/>
						</label>
						<p className="text-sm text-red-400">
							{errors.age?.message}
						</p>
					</div>
					<div className="flex flex-col justify-between mb-4">
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
						>
							{t("fields.email")}
							<input
								type="text"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								{...register("email")}
							/>
						</label>
						<p className="text-sm text-red-400">
							{errors.email?.message}
						</p>
					</div>
					<button
						type="submit"
						className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-25"
						disabled={isSubmitSuccessful}
					>
						{t("submit")}
					</button>
				</form>
			</div>
			<ToastContainer />
		</div>
	);
};
