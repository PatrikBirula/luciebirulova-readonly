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
        <Card header="Vedení podvojného účetnictví" />
        <Card header="Odborné poradenství" />
        <Card header="Vedení daňové evidence" />
        <Card header="Zpracování dílčích inventur" />
        <Card header="Zpracování účetní závěrky" />
        <Card header="Zpracování podkladů pro daňová přiznání" />
        <Card header="Zastupování před úřady" />
        <Card header="Elektronický šanon" />
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
          paragraphText="Účetnictví pro mě není jen o slepém zadávání dokladů. Je pro mě důležité poznat člověka a jeho byznys, o kterém účtuji. Získám tak ucelený přehled, díky kterému klientovi dokážu dát jasnější pohled, zda konkrétní náklad v účetnictví může figurovat či jaký má dopad na výsledek hospodaření."
        />
        <Card
          header="Elektronická archivace"
          paragraphText="Mým cílem je možnost pracovat odkudkoliv. Tomu nahrává dnešní doba elektronické komunikace, a proto u většiny svých klientů vedu šanon s doklady v elektronické podobě. Není to výhoda pouze pro mě, ale i pro mé klienty, kteří mají své doklady kdykoli k dispozici v online uložišti."
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
