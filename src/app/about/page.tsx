import "../styles/index.scss";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import Image from "next/image";

const aboutMeRoute = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-center">O mně</h1>
      <section className="container about-me">
        <article className="">
          <h5 className="fw-bold">Lucie Birulová</h5>
          <p className="">
            Jmenuji se Lucie Birulová a specializuji se na komplexní správu
            účetnictví a daňové evidence pro&nbsp;podnikatele. Spolupracuji převážně
            s obchodními společnostmi a podnikajícími fyzickými&nbsp;osobami&nbsp;-&nbsp;OSVČ.
          </p>
          <p className="">
            Mou doménou je vedení podvojného účetnictví, daňové evidence,
            odborné konzultace, analýzy odvodů a další administrativní služby -
            vše šité na míru Vašim potřebám.
          </p>
          <p className="">
            Kromě toho se věnuji vzdělávání podnikatelů. Mým cílem je ukázat Vám
            – jasně, srozumitelně a hlavně prakticky, účetní a daňové principy,
            které by měl znát každý podnikatel. Výsledkem toho zefektivníte svou
            účetní agendu, budete znát možnosti, jak ušetřit na odvodech státu a
            v mnoha případech zmírníte svou administrativní zátěž. A co je
            nejdůležitější, pomohu Vám vytvářet prostor pro růst Vašeho&nbsp;podnikání.
          </p>
          <p className="">
            Pokud hledáte spolehlivou účetní a parťáka ve světě podnikání,
            neváhejte mě kontaktovat. Budu&nbsp;se&nbsp;těšit na spolupráci!
          </p>
        </article>
        <Image
          src="/assets/images/lucka_profil.webp"
          alt="Lucie Birulová"
          className="profile-photo height-auto"
          width={364}
          height={100}
        />
      </section>
      <Footer />
    </>
  );
};

export default aboutMeRoute;
