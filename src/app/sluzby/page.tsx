import "../styles/index.scss";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import Card from "../components/Cards/serviceCard";
import Button from "../components/Buttons/button";
import References from "../components/References/references";

const Page = () => {
  return (
    <>
      <Navbar />
      <header className="page-services text-center">
        <h1>Účetnictví s přehledem a&nbsp;osobní péčí</h1>
      </header>
      <section className="page-services numbers-in-buble container">
        <h3 className="number d-flex justify-content-center align-items-center">
          8
        </h3>
        <h5>let praxe v účetnictví</h5>

        <h3 className="number d-flex justify-content-center align-items-center">
          75
        </h3>
        <h5>a více spokojených zákazníků</h5>

        <h3 className="number d-flex justify-content-center align-items-center">
          2
        </h3>
        <h5>online kurzy</h5>
      </section>
      <section className="page-services my-services container text-center">
        <h2>Co vše pro Vás mohu udělat</h2>
        <Card header="Odborné poradenství" />
        <Card header="Vedení podvojného účetnictví" />
        <Card header="Vedení daňové evidence" />
        <Card header="Zpracování účetní závěrky" />
        <Card header="Zpracování podkladů pro daňová přiznání" />
        <Card header="Další administrativní služby na míru" />
      </section>
      <section className="page-services call-me">
        <h2>Chcete spolupráci?</h2>
        <Button buttonText="Zavolejte" src="tel:+420723237148" />
      </section>
      <section className="page-services cooperation-with-me container text-center">
        <h2>Proč spolupráce se mnou a budeme si rozumět?</h2>
        <Card
          header="Budování vztahů"
          paragraphText="Je pro mě důležité budování vztahů s klienty a upřímnost. To vše vede k otevřené a hladké komunikaci a také dlouhodobé spolupráci."
        />
        <Card
          header="Dodržování termínů"
          paragraphText="Dodržení zákonných termínů je samozřejmostí. Na oplátku je pro mě důležitá včasná komunikace i ze strany klienta (dodávání dokladů, zjištění informací, ...)."
        />
        <Card
          header="Pořád v obraze"
          paragraphText="Určitě se nepídím po zákulisí každého dokladu, je pro mě ale důležité znát souvislosti pro správné zaúčtování a daňové posouzení daného případu."
        />
        <Card
          header="Individuální přístup"
          paragraphText="Účetnictví pro mě není jen o slepém zadávání dokladů. Je pro mě důležité poznat podnikatele a jeho byznys. Získám tak ucelený přehled, díky kterému Vám mohu dát jasný pohled na danou situaci a posoudit dopad konkrétního případu na Váš výsledek hospodaření."
        />
        <Card
          header="Vše v souladu se zákonem"
          paragraphText="Mým cílem je pomáhat Vám nacházet ty nejvýhodnější cesty. Je pro mě ale důležité, aby vše bylo v souladu se zákonem. Nikdy nejdu za hranu zákona, nepodporuji podnikatele v pochybných účetních praktikách a už vůbec ne v krácení daní."
        />
      </section>
      <section className="page-services write-me">
        <Button buttonText="Napište" src="mailto:ucto@luciebirulova.cz" />
        <h2>Máte nějaký dotaz?</h2>
      </section>
      <section className="page-services references container text-center">
        <h2>Reference</h2>
        <References />
      </section>
      <Footer />
    </>
  );
};

export default Page;
