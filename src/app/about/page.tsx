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
            Jmenuji se Lucie Birulová a jsem nadšenec do účetnictví a daní.
            Pomáhám podnikatelům nastavit efektivní účetní strategie zaměřené na
            odvody státu. Mým cílem je najít pro Vás tu nejvýhodnější cestu s
            ohledem na Vaše vize a cíle.
          </p>
          <p>
            Zároveň si zakládám na tom, aby vše bylo v souladu se zákony. Kromě
            toho se věnuji vzdělávání podnikatelů. Mým cílem je ukázat Vám –
            jasně, srozumitelně a hlavně prakticky, účetní a daňové principy,
            které by měl znát každý podnikatel. Výsledkem toho zefektivníte svou
            účetní agendu, budete znát možnosti, jak ušetřit na odvodech státu a
            v mnoha případech zmírníte svou administrativní zátěž.
          </p>
          <p>
            A co je nejdůležitější, získáte více prostoru pro budování svého
            podnikání. Pokud hledáte spolehlivou účetní a parťáka ve světě
            podnikání, neváhejte mě kontaktovat. Budu se těšit na spolupráci!
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
