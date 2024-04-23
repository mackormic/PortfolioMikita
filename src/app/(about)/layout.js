import InsightRoll from "@/src/components/About/InsightRoll";
import React from "react";

const insights = [
  "11+ лет работы в органах прокуратуры",
  "100+ проведенных проверок",
  "Эксперт-аудитор по ISO 37001",
  "Консультант в области борьбы с коррупцией",
  "10+ статей в журнале Юрист 🏆",
  "Юрист Аудитор Фрилансер 📝",
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
