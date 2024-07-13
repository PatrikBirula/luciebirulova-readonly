import "../styles/index.scss";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import BulletList from "../components/BulletList/bulletList";
import {
  introduction,
} from "../data/consultingData";

const coursesRoute = () => {
  return (
    <>
      <Navbar />
      <header className="page-consulting">
        <h1 className="text-center">Poradenství</h1>
      </header>
      <section className="container page-consulting">
        <p>
          Za dobu své praxe jsem se přesvědčila o tom, že{" "}
          <strong>největší hodnotu má osobní péče</strong>. Setkali jste se
          někdy s tím, že jste absolvovali nějaký kurz nebo webinář, ale nebyli
          jste z nich příliš moudří?{" "}
          <strong>Získané informace byly buď velmi obecné</strong>, nebo jste je{" "}
          <strong>nedokázali aplikovat do praxe</strong>, protože Vám chybí
          hlubší vzdělání v oboru.
        </p>
        <p>
          Vidím dnes a denně, jak se spousta lidí s účetnictvím{" "}
          <strong>trápí, nerozumí mu a dlouhé hodiny tráví v článcích</strong>,
          které jsou ještě obecnější než kurzy a webináře. Navíc zde hrozí velké
          nebezpečí, že{" "}
          <strong>
            získají chybné nebo neaktuální informace, nebo výkladu neporozumí
            správně
          </strong>
          .
        </p>
      </section>
      <section className="container page-consulting text-center">
        <h2 className="color-green">Něco o Vás vím...</h2>
        <BulletList items={introduction} />
      </section>
      <Footer />
    </>
  );
};

export default coursesRoute;
