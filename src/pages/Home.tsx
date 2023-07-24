import { useTranslation } from "react-i18next";

export const Home = () => {
	const { t } = useTranslation();
	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
				<h1 className="text-3xl font-bold mb-10">{t("home")}</h1>
				<p>{t("lorem")}</p>
			</div>
		</div>
	);
};
