import { setCookies } from "cookies-next";
import { useRouter } from "next/router";

interface IUseLocaleReturn {
  changeLocale: (locale: string) => void;
  toggleLocale: () => void;
  locale: string | undefined;
}

export const useLocale = (): IUseLocaleReturn => {
  const router = useRouter();
  const { asPath, locale } = router;

  const changeLocale = (locale: string): void => {
    router.push(asPath, asPath, { locale });
    setCookies("NEXT_LOCALE", locale);
  };

  const toggleLocale = (): void => {
    changeLocale(router.locale === "en" ? "ru" : "en");
  };

  return { changeLocale, toggleLocale, locale };
};
