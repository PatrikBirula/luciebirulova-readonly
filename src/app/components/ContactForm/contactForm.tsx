"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FormMessageOverlay from "./responseMessage";
import "./contact-form.scss";

const ContactUs = () => {
  const [messageText, setMessageText] = useState("");
  const [messageState, setMessageState] = useState("");
  const [messageShow, setMessageShow] = useState(false);

  const form = useRef();
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

  const sendEmail = (e: Event) => {
    e.preventDefault();
    if (!form.current) return;

    setMessageShow(true);
    setMessageState(sendingMessage.state);
    setMessageText(sendingMessage.message);

    emailjs
      .sendForm("web-form-1994*", "template_lpohw3k", form.current, {
        publicKey: "Fky7hQJC9nK2drZ7B",
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
          type="text"
          placeholder="Obsah zprávy"
          name="message"
          required
        />
        <span>Zpráva*</span>
      </label>
      <input type="submit" value="Odeslat" className="btn btn-primary" />
    </form>
  );
};

export default ContactUs;
