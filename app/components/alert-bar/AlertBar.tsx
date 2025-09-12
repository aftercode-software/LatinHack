"use client";
import { useFormatter, useNow, useTranslations } from "next-intl";
import Container from "../Container";
import { END_DATE } from "@/constants/endDate";
import { useState } from "react";

export default function AlertBar() {
  const now = useNow();
  const [show, setShowing] = useState(true);
  const nowFormatted = useFormatter().dateTime(now, { dateStyle: "long" });
  const format = useFormatter();
  const t = useTranslations("AlertBar");

  const daysLeft = Math.ceil(
    (END_DATE.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <>
      {show && (
        <div className="bg-green">
          <Container className="py-2 flex justify-between items-center">
            <div className="text-black font-anybody uppercase">
              {t("projects-closed", { date: nowFormatted })}.{" "}
              <b className="font-semibold text-xl">
                {t("days-left", { days: daysLeft })}
              </b>
            </div>
            <div
              className="text-black font-semibold cursor-pointer"
              onClick={() => setShowing(false)}
            >
              X
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
