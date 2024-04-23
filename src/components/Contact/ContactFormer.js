"use client";

import React, { useState } from "react";
import axios from "axios";

export default function ContactFormer() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mwkgbeqa",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, "Спасибо, ваша заявка улетела");
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div className="flex items-center flex-col mt-8">
      <form
        onSubmit={handleOnSubmit}
        className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
      >
        Добрый день! Меня зовут{" "}
        <input
          onChange={handleOnChange}
          placeholder="ваше имя"
          id="name"
          type="text"
          required
          value={inputs.name}
          className="outline-none border-0 p-0 mx-2 
        focus:ring-0 placeholder:text-center placeholder:text-lg 
        border-b border-gray focus:border-gray bg-transparent"
        />
        и я бы хотел(а) организовать в нашей компании семинар/обучение/вебинар
        по вопросам антикоррупционной работы. Наша контактная почта{" "}
        <input
          onChange={handleOnChange}
          id="email"
          type="email"
          placeholder="ваша почта"
          className="outline-none border-0 p-0 mx-2 
        focus:ring-0 placeholder:text-center placeholder:text-lg 
        border-b border-gray focus:border-gray bg-transparent"
        />
        и мой телефон для связи
        <input
          onChange={handleOnChange}
          placeholder="ваш телефон"
          id="phone"
          type="phone"
          name="_replyto"
          required
          value={inputs.phone}
          className="outline-none border-0 p-0 mx-2 
        focus:ring-0 placeholder:text-center placeholder:text-lg 
        border-b border-gray focus:border-gray bg-transparent"
        />
        А тут краткое описание планируемой встречи: <br />
        <textarea
          onChange={handleOnChange}
          id="message"
          name="message"
          required
          value={inputs.message}
          placeholder="Тема, дата, вопросы, да все что угодно..."
          className=" w-full outline-none border-0 p-0 mx-2 
        focus:ring-0  placeholder:text-lg 
        border-b border-gray focus:border-gray bg-transparent"
        />
        <input
          className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl 
        py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark
        dark:border-light rounded cursor-pointer"
          type="submit"
          value="Отправить заявку"
          disabled={status.submitting}
        />
      </form>

      {/* <form
        onSubmit={handleOnSubmit}
        className="flex items-center flex-col text-dark/75 dark:text-light/75"
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          onChange={handleOnChange}
          required
          value={inputs.name}
          className=" border-[1px] border-dark/75 dark:border-light/75 bg-light dark:bg-dark rounded-xl w-full p-2  text-center"
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="phone"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.phone}
          className="border-[1px] border-dark/75 dark:border-light/75 bg-light dark:bg-dark rounded-xl w-full p-2 text-center"
        />
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="укажите дату, время и необходимую процедуру)"
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          className="overflow-hidden border-[1px] border-dark/75 dark:border-light/75 bg-light dark:bg-dark rounded-xl p-2 text-[8px] text-center w-full"
        />

        <button
          type="submit"
          disabled={status.submitting}
          className="flex items-center my-4 bg-dark text-light dark:bg-light dark:text-dark px-4 rounded-lg md:text-lg font-semibold
                   hover:bg-light hover:text-dark
                   border-2 border-solid border-transparent hover:border-dark
                    dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                    p-2 md:p-2.5 md:px-6 text-base"
        >
          {!status.submitting
            ? !status.submitted
              ? " Записаться"
              : "Записаны"
            : "Записываем..."}
        </button>
      </form> */}
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </div>
  );
}
