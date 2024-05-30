import InsightRoll from "@/src/components/About/InsightRoll";
import React from "react";

const insights = [
  "11+ лет работы в органах прокуратуры",
  "Юрист по коррупции и не только",
  "Эксперт-аудитор по ISO 37001 🏆",
  "100+ проведенных проверок",
  "Профилактика коррупции",
  "автор статей в журнале Юрист",
  "Юрист Фрилансер 📝",
];

const AboutLayout = ({ children }) => {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
};

export default AboutLayout;
