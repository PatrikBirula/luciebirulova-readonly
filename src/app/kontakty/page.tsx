import "../styles/index.scss";
import Image from "next/image";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import ContactForm from "../components/ContactForm/contactForm";

const contactsRoute = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-center">Kontakt</h1>
      <section className="container contacts">
        <div className="contact">
          <h5>Kontaktní údaje</h5>
          <ul>
            <li>
              <Image
                src="assets/images/icons/user.svg"
                alt="Lucie Birulová"
                width={25}
                height={25}
                className="list-icon"
              />
              <strong>Jméno:</strong> Lucie&nbsp;Birulová
            </li>
            <li>
              <a href="mailto:ucto@luciebirulova.cz">
                <Image
                  src="assets/images/icons/mail.svg"
                  alt="email"
                  width={25}
                  height={25}
                  className="list-icon"
                />
                <strong>E-mail:</strong> ucto@luciebirulova.cz
              </a>
            </li>
            <li>
              <a href="tel:+420 723 237 148">
                <Image
                  src="assets/images/icons/phone.svg"
                  alt="telefon"
                  width={25}
                  height={25}
                  className="list-icon"
                />
                <strong>Telefon:</strong> +420&nbsp;723&nbsp;237&nbsp;148
              </a>
            </li>
            <li>
              <Image
                src="assets/images/icons/snowflake.svg"
                alt="IČO"
                width={25}
                height={25}
                className="list-icon"
              />
              <strong>IČO:</strong> 08571341
            </li>
          </ul>
        </div>
        <div className="map">
          <h5>Adresa</h5>
          <ul>
            <li>
              <Image
                src="assets/images/icons/map-pin.svg"
                alt="Adresa"
                width={25}
                height={25}
                className="list-icon"
              />
              <strong>Adresa:</strong> Náchod, Okrová 281, 547 01
            </li>
          </ul>
          <iframe
            width="100%"
            height="210px"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Okrov%C3%A1%20281,%20N%C3%A1chod,%20%C4%8Cesk%C3%A1%20Republika+(Lucie%20Birulov%C3%A1)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </section>
      {/* <section className="container text-center contact-form-wrapper">
        <h1>Formulář</h1>
        <ContactForm />
      </section> */}
      <Footer />
    </>
  );
};

export default contactsRoute;
