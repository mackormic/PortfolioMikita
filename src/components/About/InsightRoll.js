import React from "react";

const InsightRoll = ({ insights }) => {
  return (
    <div className="w-full bg-accent dark:bg-accentDark dark:text-dark text-light whitespace-nowrap overflow-hidden">
      <div
        className="animate-roll w-full py-2 sm:py-3 flex items-center justify-center  font-semibold
      tracking-wider text-sm sm:text-base
      "
      >
        {insights.map((text) => (
          <div key={text}>
            {text} <span className="px-4">|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;
