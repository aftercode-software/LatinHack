import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("FAQ");
  const questions = [
    {
      title: t("questions.question1.title"),
      answer: t("questions.question1.answer"),
    },
    {
      title: t("questions.question2.title"),
      answer: t("questions.question2.answer"),
    },
    {
      title: t("questions.question3.title"),
      answer: t("questions.question3.answer"),
    },
    {
      title: t("questions.question4.title"),
      answer: t("questions.question4.answer"),
    },
    {
      title: t("questions.question5.title"),
      answer: t("questions.question5.answer"),
    },
    {
      title: t("questions.question6.title"),
      answer: t("questions.question6.answer"),
    },
    {
      title: t("questions.question7.title"),
      answer: t("questions.question7.answer"),
    },
  ];
  return (
    <section className="mt-10">
      <h2>{t("title")}</h2>
      <div>
        <ol className="list-decimal">
          {questions.map((question) => (
            <li key={question.title}>
              <p>{question.title}</p>
              <p>{question.answer}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
