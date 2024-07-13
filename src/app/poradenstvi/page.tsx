import "../styles/index.scss";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import BulletList from "../components/BulletList/bulletList";
import {
  introduction,
  ideas,
  individualConsulting,
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
      <section className="container page-consulting text-center">
        <h2 className="color-green">Představte si</h2>
        <BulletList items={ideas} />
      </section>
      <section className="container page-consulting text-center">
        <h2 className="color-green">Díky osobnímu poradenství</h2>
        <BulletList items={individualConsulting} />
      </section>
      <section className="container page-consulting">
        <h2 className="color-green text-center">Časté dotazy podnikatelů</h2>
        <h4 className="text-center">
          <strong>Proč chtít individuální poradenství</strong>, <br /> když si
          můžu dnes najít spoustu informací na internetu?
        </h4>
        <p>
          Internet je nesmírně bohatý zdroj informací, ale hledání v něm je,
          speciálně u tohoto oboru, velmi časově náročné. V článcích můžete
          nakonec strávit hodiny a hrozí, že získáte nesprávné nebo zavádějící
          informace, což může mít negativní důsledky ve vztahu k úřadům. Na
          konzultaci s odborníkem strávíte mnohem méně času, než pátráním na
          internetu. A čas jsou ….
        </p>
        <h4 className="text-center">
          <strong>Nechce se mi za poradenství platit</strong>, zdá se mi to jako
          hodně peněz…
        </h4>
        <p>
          Je pravda, že poradenské služby nejsou levnou záležitostí. Představte
          si ale, že{" "}
          <strong>
            díky těmto službám ušetříte na daních a odvodech několikanásobek
            této částky
          </strong>
          , dost často už v prvním roce, kdy aplikujete opatření, které jste se
          dozvěděli.
        </p>
        <p>
          <strong>
            Účetnictví je navíc obor, ve kterém dochází velmi často ke změnám
          </strong>
          . Pro podnikatele je těžké vše sledovat. Díky poradenství budete mít{" "}
          <strong>
            klid, že máte vše z účetního hlediska nastavené správně, a
            eliminujete tak riziko pokut
          </strong>{" "}
          ze strany úřadů.
        </p>
        <p>
          Investice do poradenských služeb je tedy{" "}
          <strong>investicí do budoucnosti Vašeho podnikání</strong>. Mým cílem
          je pomoci Vám dosáhnout finanční stability a růstu, což Vám v konečném
          důsledku přinese více peněz, než kolik za mé služby zaplatíte.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default coursesRoute;
