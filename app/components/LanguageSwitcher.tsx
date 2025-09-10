"use client";
import { setUserLocale } from "../services/locale";

export default function LanguageSwitcher() {
  return (
    <div className="space-x-2 *:bg-blue-500 *:text-white *:p-2 *:rounded-md">
      <button
        onClick={() => {
          setUserLocale("en");
        }}
      >
        Set to EN
      </button>
      <button
        onClick={() => {
          setUserLocale("es");
        }}
      >
        Set to ES
      </button>
      <button
        onClick={() => {
          setUserLocale("pt");
        }}
      >
        Set to PT-BR
      </button>
    </div>
  );
}
