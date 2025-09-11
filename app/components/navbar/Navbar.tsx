import { useTranslations } from "next-intl";
import Link from "next/link";
import Container from "../Container";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navbar");
  return (
    <nav>
      <Container className="flex justify-between items-center">
        <img src="https://placehold.co/200x120" alt="logo" />
        <LanguageSwitcher />

        <ul>
          <li>
            <Link href="/">{t("home")}</Link>
          </li>
          <li>
            <Link href="/#how-it-works">{t("how-it-works")}</Link>
          </li>
          <li>
            <Link href="/#contact">{t("contact")}</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
