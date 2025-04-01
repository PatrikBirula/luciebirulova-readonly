"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FormMessageOverlay from "./responseMessage";
import "./contact-form.scss";

const ContactUs = () => {
  const [messageText, setMessageText] = useState("");
  const [messageState, setMessageState] = useState("");
  const [messageShow, setMessageShow] = useState(false);
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(false);
  const [isCheckboxError, setIsCheckboxError] = useState(false);

  const handleCheckboxChange = () => {
    setCheckboxIsChecked(!checkboxIsChecked);
    setIsCheckboxError(false);
  };

  const form = useRef<HTMLFormElement>(null);
  const sendingMessage = {
    message: "Odesílám zprávu...",
    state: "sending",
  };
  const successMessage = {
    message: "Zpráva byla odeslána :)",
    state: "success",
  };
  const errorMessage = {
    message: "Zprávu se nepodařilo odeslat, zkuste to prosím později :(",
    state: "error",
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    if (!checkboxIsChecked) {
      setIsCheckboxError(true);
      return; // Zabrání odeslání formuláře
    }

    setMessageShow(true);
    setMessageState(sendingMessage.state);
    setMessageText(sendingMessage.message);

    emailjs
      .sendForm("service_mqodsgw", "template_bzd8d1q", form.current, {
        publicKey: "tw_QsqfSt80XpMyRV",
      })
      .then(
        () => {
          resetForms();
          setMessageState(successMessage.state);
          setMessageText(successMessage.message);
        },
        error => {
          setMessageState(errorMessage.state);
          setMessageText(errorMessage.message);
        }
      );
  };

  const resetForms = () => {
    if (!form.current) return;
    const inputs = form.current.querySelectorAll("input");
    const textarea = form.current.querySelector("textarea");
    if (!inputs || !textarea) return;

    inputs.forEach(input => {
      input.value = "";
    });
    textarea.value = "";
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <FormMessageOverlay
        message={messageText}
        state={messageState}
        show={messageShow}
      />
      <label>
        <input
          className="input"
          type="text"
          placeholder="Jan"
          name="first_name"
          required
        />
        <span>Jméno*</span>
      </label>
      <label>
        <input
          className="input"
          type="text"
          placeholder="Novák"
          name="second_name"
          required
        />
        <span>Příjmení*</span>
      </label>
      <label>
        <input
          className="input"
          type="email"
          placeholder="jan.novak@gmail.com"
          name="email"
          required
        />
        <span>E-mail*</span>
      </label>
      <label>
        <input
          className="input"
          type="number"
          placeholder="+420 420 420 420"
          name="tel"
        />
        <span>Telefon</span>
      </label>
      <label>
        <input
          className="input"
          type="text"
          placeholder="Dotaz na spolupráci"
          name="subject"
          required
        />
        <span>Predmět*</span>
      </label>
      <label>
        <textarea
          className="input-area"
          placeholder="Obsah zprávy"
          name="message"
          required
        />
        <span>Zpráva*</span>
      </label>
      <div className="checkbox-wrapper">
        <input className={isCheckboxError ? "error-checkbox" : "inherit"} type="checkbox" checked={checkboxIsChecked} onChange={handleCheckboxChange}></input>
        <span>Odesláním formuláře souhlasím s <a href="../assets/pdf/VOP.pdf" target="_blank">obchodními podmínkami</a> a se zásadami <a href="../assets/pdf/GDPR.pdf" target="_blank">zpracování osobních údajů.</a></span>
      </div>
      <input type="submit" value="Odeslat" className={`btn btn-primary ${!checkboxIsChecked && "disabled"}`} />
    </form>
  );
};

export default ContactUs;
