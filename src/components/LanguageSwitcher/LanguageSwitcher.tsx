import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};
	return (
		<div className="flex gap-2">
			<button
				type="button"
				className="bg-blue-500 text-white"
				onClick={() => changeLanguage("en")}
			>
				En
			</button>
			<button
				type="button"
				className="bg-yellow-500 text-white"
				onClick={() => changeLanguage("ua")}
			>
				Ua
			</button>
		</div>
	);
};

export default LanguageSwitcher;
