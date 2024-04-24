import Image from "next/image";
import React from "react";

import profileCharacter from "@/public/me-bg.png";

const AboutCoverSection = () => {
  return (
    <section className=" w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className=" w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center">
        <Image
          src={profileCharacter}
          alt="MikitaFiasko"
          className="w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center rounded-lg "
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className=" w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="  font-bold  text-3xl xs:text-4xl sxl:text-5xl  text-center lg:text-left">
          Мечтайте о многом, работайте усердно, достигайте большего!
        </h2>
        <p className="font-medium  mt-4 text-base md:text-sm">
          Окончил в 2012 году юридический факультет БГУ по специальности
          «Правоведение».
          <br />
          <br />В 2011 году обучался в Lund University в Швеции. Магистр
          гендерных наук.
          <br />
          <br />
          В 2016 году сдал экзамен в Верховном суде на должность судьи судов
          Республики Беларусь. <br />
          <br />
          Более 11 лет опыта работы в органах прокуратуры в сфере борьбы с
          коррупцией и организованной преступностью. <br />
          <br />
          Участвовал в предложениях по изменению Закона Республики Беларусь «О
          борьбе с коррупцией» и внедрению СТБ ISO 37001 «Система менеджмента
          борьбы со взяточничеством» <br />
          <br />
          Являюсь автором статей в журналах «Юрист», «Строительная деятельность
          и право».
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
